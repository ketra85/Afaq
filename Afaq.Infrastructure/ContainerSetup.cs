using Autofac;
using Autofac.Extensions.DependencyInjection;
using Afaq.Core;
using Afaq.Core.Interfaces;
using Afaq.Infrastructure.Data;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Reflection;
using Serilog;

namespace Afaq.Infrastructure
{
    // registers required services for data access to db
    public static class ContainerSetup
    {
        public static IServiceProvider InitializeWeb(Assembly webAssembly, IServiceCollection services) =>
            new AutofacServiceProvider(BaseAutofacInitialization(setupAction =>
            {
                setupAction.Populate(services);
                setupAction.RegisterAssemblyTypes(webAssembly).AsImplementedInterfaces();
            }));

        public static IContainer BaseAutofacInitialization(Action<ContainerBuilder> setupAction = null)
        {
            var builder = new ContainerBuilder();
            var infrastructureAssembly = Assembly.GetAssembly(typeof(EfRepository));
            var coreAssembly = Assembly.GetAssembly(typeof(IRepository));
            builder.RegisterAssemblyTypes(coreAssembly, infrastructureAssembly).AsImplementedInterfaces();

            setupAction?.Invoke(builder);
            Log.Information("Hello from infra");
            return builder.Build();
        }
    }
}