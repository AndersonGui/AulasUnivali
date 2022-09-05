using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HW.API.Models.Maps
{
    public class UsuarioMapping : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.HasKey(p => p.Id);

            builder.Property(p => p.Id).ValueGeneratedOnAdd().UseMySqlIdentityColumn();

            builder.Property(p => p.Nome).HasColumnType("varchar(200)").IsRequired();

            builder.Property(p => p.Email).HasColumnType("varchar(200)").IsRequired();

            builder.Property(p => p.Senha).HasColumnType("varchar(200)").IsRequired();

            builder.Property(p => p.Administrador).HasColumnType("bit(1)").IsRequired();

            builder.Ignore(p => p.Perfis);

            builder.ToTable("Usuario");
        }
    }
}
