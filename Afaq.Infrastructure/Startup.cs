using Afaq.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Serilog;

namespace Afaq.Infrastructure
{
    // Initialises the db connection
    // Need to figure out how to secure the connection string
    public static class Startup
    {
        // public static void AddDbContext(this IServiceCollection services) =>
        //     services.AddDbContext<AppDbContext>(options =>
        //         options.UseSqlite("Data Source=database.sqlite"));
        public static void AddDbContext(this IServiceCollection services) =>
            services.AddDbContext<AppDbContext>(options =>
                options.UseNpgsql("Server=127.0.0.1;Port=5432;Database=Afaq;User Id=postgres;Password=admin;"));
            // Log.Information("connection successful");
    }
}