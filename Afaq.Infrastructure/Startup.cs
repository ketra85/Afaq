using Afaq.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Afaq.Infrastructure
{
    public static class Startup
    {
        public static void AddDbContext(this IServiceCollection services) =>
            services.AddDbContext<AppDbContext>(options =>
                options.UseSqlite("Data Source=database.sqlite"));
        // public static void AddDbContext(this IServiceCollection services) =>
        //     services.AddDbContext<AppDbContext>(options =>
        //         options.UseNpgsql("Host=localhost:5432;Username=ketra;Password=A!612842;Database=tododb;"));
    }
}