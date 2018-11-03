﻿using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Owin;
using NHibernate;
using Ninject;

namespace Web.Middleware
{
    public class CreateTransaction : OwinMiddleware
    {
        private IKernel _kernel; 

        public CreateTransaction(OwinMiddleware next,IKernel kernel) : base(next)
        {
            _kernel = kernel;
        }

        public async override Task Invoke(IOwinContext context)
        {
            var session = (ISession)_kernel.GetService(typeof(ISession));

            if (session == null)
                throw new Exception("Failed to resolve Session");

            var needTransaction = new[] {"POST", "PUT", "DELETE"}.Contains(context.Request.Method);

            if (needTransaction)
            {
                using (var transaction = session.BeginTransaction())
                {
                    try
                    {
                        await Next.Invoke(context);
                        transaction.Commit();
                    }
                    catch (Exception)
                    {
                        transaction.Rollback();
                        throw;
                    }
                }
            }
            else
            {
                await Next.Invoke(context);
            }
        }
    }
}