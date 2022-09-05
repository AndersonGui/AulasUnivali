import { Perfil } from "./Perfil"

interface Usuario{
    id: number,
    email: string,
    senha: string,
    nome: string,
    administrador: boolean,

    perfis: number[]
}

export default Usuario;