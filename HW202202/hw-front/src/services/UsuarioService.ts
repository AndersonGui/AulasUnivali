import Usuario from "../interfaces/Usuario";
import Api from "./Api";

class UsuarioService {
    async buscarTodos(): Promise<Usuario[]> {
        let { data: result } = await Api.get<Usuario[]>('Usuario');
        return result;
    }

    async Inserir(usuario: Usuario): Promise<Usuario> {
        let { data: result } = await Api.post<Usuario>(`Usuario`, usuario);

        return result;
    }

    async VincularPerfil(idUsuario: number, idPerfil: number): Promise<void> {
        await Api.put(`Usuario/VincularPerfil`, { idUsuario, idPerfil });
    }

    async DesvincularPerfil(idUsuario: number, idPerfil: number): Promise<void> {
        await Api.put(`Usuario/DesvincularPerfil`, { idUsuario, idPerfil });
    }
}


export default new UsuarioService();