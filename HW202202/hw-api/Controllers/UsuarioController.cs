using HW.API.Models;
using HW.API.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HW.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly ILogger<UsuarioController> _logger;

        public UsuarioController(ILogger<UsuarioController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Usuario> Get()
        {
            var context = new HoWContext();

            var usuarios = context.Usuario.Include(u => u.UsuarioPerfil).ThenInclude(up => up.Perfil).ToList();

            return usuarios;
        }

        [HttpPost]
        public object Post(InserirUsuario vm)
        {
            var usuario = new Usuario(vm);

            var context = new HoWContext();

            context.Usuario.Add(usuario);
            context.SaveChanges();

            return usuario;
        }

        [HttpPut("VincularPerfil")]
        public bool VincularPerfil(VinculoUsuarioPerfil vm)
        {
            var context = new HoWContext();

            var usuario = context.Usuario.Include(u => u.UsuarioPerfil).ThenInclude(up => up.Perfil).FirstOrDefault(c => c.Id == vm.IdUsuario);
            var perfil = context.Perfil.FirstOrDefault(c => c.Id == vm.IdPerfil);
            usuario.UsuarioPerfil.Add(new UsuarioPerfil { IdPerfil =perfil.Id, IdUsuario = usuario.Id });
            context.SaveChanges();

            return true;
        }

        [HttpPut("DesvincularPerfil")]
        public bool DesvincularPerfil(VinculoUsuarioPerfil vm)
        {
            var context = new HoWContext();

            var usuario = context.Usuario.Include(u => u.UsuarioPerfil).ThenInclude(up => up.Perfil).FirstOrDefault(c => c.Id == vm.IdUsuario);
            usuario.UsuarioPerfil = usuario.UsuarioPerfil.Where(up => up.IdPerfil != vm.IdPerfil).ToList();
            context.SaveChanges();

            return true;
        }
    }
}