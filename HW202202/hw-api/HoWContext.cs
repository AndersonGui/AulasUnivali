using HW.API.Models;
using Microsoft.EntityFrameworkCore;

namespace HW.API
{
    public class HoWContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public HoWContext()
        {

        }



        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Perfil> Perfil { get; set; }
        public DbSet<UsuarioPerfil> UsuarioPerfil { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseMySql("server=localhost; database=HOW; user=HOW; password=HOW", ServerVersion.AutoDetect("server=localhost; database=HOW; user=HOW; password=HOW"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(HoWContext).Assembly);

            base.OnModelCreating(modelBuilder);
        }
    }
}
