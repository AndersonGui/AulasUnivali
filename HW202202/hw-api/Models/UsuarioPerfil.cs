namespace HW.API.Models
{
    public class UsuarioPerfil
    {
        public int IdUsuario { get; set; }
        public int IdPerfil { get; set; }
        public virtual Usuario Usuario { get; set; }
        public virtual Perfil Perfil { get; set; }
        
    }
}
