using HW.API.ViewModels;
using System.Text.Json.Serialization;

namespace HW.API.Models
{
    public class Perfil
    {
        public Perfil()
        {

        }

        public Perfil(InserirPerfil inserirPerfil)
        {
            Descricao = inserirPerfil.Descricao;
            Ativo = inserirPerfil.Ativo;
        }

        public int Id { get; set; }
        public string Descricao { get; set; }
        public bool Ativo { get; set; }

        [JsonIgnore]
        public List<UsuarioPerfil> UsuarioPerfil { get; set; }
    }
}
