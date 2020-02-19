using Afaq.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Afaq.Infrastructure.Data.Config
{
    // setup access rules such as required fields, min/max lengths etc.
    public class PlanConfiguration : IEntityTypeConfiguration<Plan>
    {
        public void Configure(EntityTypeBuilder<Plan> builder)
        {
            builder.Property(p => p.gdId)
                .IsRequired();
            builder.Property(p => p.pmId)
                .IsRequired();
            builder.Property(p => p.dates)
                .IsRequired();
        }
    }
}