using Afaq.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Afaq.Infrastructure.Data.Config
{
    // setup access rules such as required fields, min/max lengths etc.
    public class RotationConfiguration : IEntityTypeConfiguration<Rotation>
    {
        public void Configure(EntityTypeBuilder<Rotation> builder)
        {
            builder.Property(r => r.name)
                .IsRequired();
            builder.Property(r => r.lmId)
                .IsRequired();
            builder.Property(r => r.planId)
                .IsRequired();
        }
    }
}