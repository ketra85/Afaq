using Afaq.Core.Interfaces;
using Afaq.Infrastructure.Data;
using Afaq.Tests;
using Afaq.Api;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;

namespace Afaq.FunctionalTests
{
    public class ApiFactory<TStartup> : WebApplicationFactory<Startup>
    {
        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.ConfigureServices(services => 
            {
                var serviceProvider = new ServiceCollection()
                    .AddEntityFrameworkInMemoryDatabase()
                    .BuildServiceProvider();

                    services.AddDbContext<AppDbContext>(options =>
                    {
                        options.UseInMemoryDatabase("InMemoryDbForTesting");
                        options.UseInternalServiceProvider(serviceProvider);
                    });
                    services.AddScoped<IDomainEventDispatcher, NoOpDomainEventDispatcher>();

                    var sp = services.BuildServiceProvider();

                    using(var scope = sp.CreateScope())
                    {
                        var scopedServices = scope.ServiceProvider;
                        var db = scopedServices.GetRequiredService<AppDbContext>();
                        //var logger

                        db.Database.EnsureCreated();

                        try 
                        {
                            SeedData.PopulateTodoTestData(db);
                        }
                        catch(Exception e)
                        {

                        }
                    }
            });
        }        
    }
}