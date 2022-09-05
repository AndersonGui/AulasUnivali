using HW.API.Models;
using HW.API.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HW.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PerfilController : ControllerBase
    {
        private readonly ILogger<PerfilController> _logger;

        public PerfilController(ILogger<PerfilController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Perfil> Get()
        {
            var context = new HoWContext();

            var perfis = context.Perfil.ToList();

            return perfis;
        }

        [HttpPost]
        public object Post(InserirPerfil vm)
        {
            var perfil = new Perfil(vm);

            var context = new HoWContext();

            context.Perfil.Add(perfil);
            context.SaveChanges();

            return perfil;
        }
    }
}