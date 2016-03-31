﻿using System;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Http.Internal;
using Microsoft.Extensions.DependencyInjection;
using NHibernate;
using NSubstitute;
using NUnit.Framework;
using Web.Middleware;

namespace Web.Test.Middleware
{
    [TestFixture]
    public class CreateTransactionTest
    {
        private ISession _session; 
        private ITransaction _transaction;
        private IServiceProvider _serviceProvider;

        private MockMiddleware _next;

        private HttpContext _context;

        private CreateTransaction _createTransaction;

        [SetUp]
        public void SetUp()
        {
            _next = new MockMiddleware();

            _serviceProvider = Substitute.For<IServiceProvider>();
            _context = new DefaultHttpContext();

            _context.ApplicationServices = _serviceProvider;

            _session = Substitute.For<ISession>();
            _transaction = Substitute.For<ITransaction>();
            _session.BeginTransaction().Returns(_transaction);

            _serviceProvider.GetService<ISession>().Returns(_session);
            _createTransaction = new CreateTransaction(_next.Invoke);
        }

        [Test]
        public void GivenMiddleware_WhenInvokeGet_NoTransaction()
        {
            _context.Request.Method = "GET";

            var result = _createTransaction.Invoke(_context);
            result.Wait();

            _session.Received(0).BeginTransaction();
            _transaction.Received(0).Commit();
            _transaction.Received(0).Rollback();
        }

        [Test]
        public void GivenMiddleware_WhenInvokePost_Transaction()
        {
            _context.Request.Method = "POST";

            var result = _createTransaction.Invoke(_context);
            result.Wait();

            _session.Received(1).BeginTransaction();
            _transaction.Received(1).Commit();
            _transaction.Received(0).Rollback();
        }

        [Test]
        public void GivenMiddleware_WhenInvokePostWithException_TransactionRollback()
        {
            _next.ThrowException = true;

            _context.Request.Method = "POST";

            Assert.That(() => _createTransaction.Invoke(_context), Throws.TypeOf<Exception>());
            
            _session.Received(1).BeginTransaction();
            _transaction.Received(0).Commit();
            _transaction.Received(1).Rollback();
        }
    }
}
