using HW.API.ViewModels;
using System.Text.Json.Serialization;

namespace HW.API.Models
{
    public class Usuario
    {
        public Usuario()
        {

        }

        public Usuario(InserirUsuario usuario)
        {
            Nome = usuario.Nome;
            Email = usuario.Email;
            Senha = usuario.Senha;
            Administrador = usuario.Administrador;
            UsuarioPerfil = new List<UsuarioPerfil> { };
        }

        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public bool Administrador { get; set; }

        public IEnumerable<int> Perfis { get {
                return UsuarioPerfil.Select(up => up.IdPerfil);
            } 
        }

        [JsonIgnore]
        public List<UsuarioPerfil> UsuarioPerfil { get; set; }

    }
}
