using Afaq.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Afaq.Infrastructure.Data.Config
{
    // setup access rules such as required fields, min/max lengths etc.
    public class ProjectConfiguration : IEntityTypeConfiguration<Project>
    {
        public void Configure(EntityTypeBuilder<Project> builder)
        {
            builder.Property(p => p.name)
                .IsRequired();
            builder.Property(p => p.rotationId)
                .IsRequired();
            builder.Property(p => p.dates)
                .IsRequired();
        }
    }
}