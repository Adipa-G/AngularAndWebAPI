﻿using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.DependencyInjection;
using NHibernate;

namespace Web.Middleware
{
    public class CreateTransaction
    {
        private readonly RequestDelegate _next;

        public CreateTransaction(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context,ISession session)
        {
            var needTransaction = new[] { "POST", "PUT", "DELETE" }.Contains(context.Request.Method);
            if (needTransaction)
            {
                using (var transaction = session.BeginTransaction())
                {
                    try
                    {
                        await _next.Invoke(context);
                        session.Flush();
                        transaction.Commit();
                    }
                    catch (Exception)
                    {
                        session.Clear();
                        transaction.Rollback();
                        throw;
                    }
                }
            }
            else
            {
                await _next.Invoke(context);
            }
        }
    }
}