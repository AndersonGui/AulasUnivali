using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HW.API.Models.Maps
{
    public class PerfilMapping : IEntityTypeConfiguration<Perfil>
    {
        public void Configure(EntityTypeBuilder<Perfil> builder)
        {
            builder.HasKey(p => p.Id);

            builder.Property(p => p.Id).ValueGeneratedOnAdd().UseMySqlIdentityColumn();

            builder.Property(p => p.Descricao).HasColumnType("varchar(200)").IsRequired();

            builder.Property(p => p.Ativo).HasColumnType("bit(1)").IsRequired();

            builder.ToTable("Perfil");
        }
    }
}
