using Afaq.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Afaq.Infrastructure.Data.Config
{
    // setup access rules such as required fields, min/max lengths etc.
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.Property(u => u.StaffId)
                .IsRequired();
        }
    }
}