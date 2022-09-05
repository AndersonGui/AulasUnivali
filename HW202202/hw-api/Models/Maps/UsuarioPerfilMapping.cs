using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HW.API.Models.Maps
{
    public class UsuarioPerfilMapping : IEntityTypeConfiguration<UsuarioPerfil> //
    {
        public void Configure(EntityTypeBuilder<UsuarioPerfil> builder)
        {
            builder.HasKey(up => new { up.IdPerfil, up.IdUsuario});

            builder.HasOne(pc => pc.Perfil)
            .WithMany(p => p.UsuarioPerfil)
            .HasForeignKey(pc => pc.IdPerfil);

            builder.HasOne(pc => pc.Usuario)
            .WithMany(c => c.UsuarioPerfil)
            .HasForeignKey(pc => pc.IdUsuario);
        }
    }
}
