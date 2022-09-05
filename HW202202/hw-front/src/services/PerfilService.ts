import { Perfil } from "../interfaces/Perfil";
import Api from "./Api";

class PerfilService {
    async buscarTodos(filtroAtivo: boolean | undefined = undefined): Promise<Perfil[]> {
        let { data: result } = await Api.get<Perfil[]>('Perfil');

        if(filtroAtivo !== undefined){
            return result.filter(p => p.ativo === filtroAtivo);
        }

        return result;
    }

    async Inserir(perfil: Perfil): Promise<Perfil> {
        let { data: result } = await Api.post<Perfil>(`Perfil`, perfil);

        return result;
    }
}


export default new PerfilService();