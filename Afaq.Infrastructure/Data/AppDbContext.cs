using Afaq.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Afaq.Core.Entities;
using Afaq.Core;
using System.Reflection;

namespace Afaq.Infrastructure.Data
{
    // Db Context is final layer between infrastructure and the db
    // the application is never in direct contact with the db
    // EfRepository <-> DbContext <-> DB
    public class AppDbContext : DbContext
    {
        private readonly IDomainEventDispatcher _dipatcher;

        public AppDbContext(DbContextOptions<AppDbContext> options, IDomainEventDispatcher dispatcher) : base(options)
        {
            _dipatcher = dispatcher;
        }

        public DbSet<TodoItem> TodoItems { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            int result = await base.SaveChangesAsync(cancellationToken).ConfigureAwait(false);
            if(_dipatcher == null) return result;

            var entitiesWithEvents = ChangeTracker.Entries<BaseEntity>()
                .Select(e => e.Entity)
                .Where(e => e.Events.Any())
                .ToArray();

            foreach(var entity in entitiesWithEvents)
            {
                var events = entity.Events.ToArray();
                entity.Events.Clear();
                foreach(var domainEvent in events)
                {
                    await _dipatcher.Dispatch(domainEvent).ConfigureAwait(false);
                }
            }
            return result;
        }

        public override int SaveChanges()
        {
            return SaveChangesAsync().GetAwaiter().GetResult();
        }
    }
}