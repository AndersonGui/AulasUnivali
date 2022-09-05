import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap"
import { Perfil } from "../interfaces/Perfil";
import Usuario from "../interfaces/Usuario";
import PerfilService from "../services/PerfilService";
import UsuarioService from "../services/UsuarioService";
import ModalVinculoPerfis from "./Components/ModalVinculoPerfis";

function VincularPerfisPage() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [perfis, setPerfis] = useState<Perfil[]>([]);
    const [usuario, setUsuario] = useState<Usuario | undefined>(undefined);
    const [exibirModal, setExibirModal] = useState(false);

    useEffect(() => {
        buscarUsuarios()
    }, []);

    useEffect(() => {
        buscarPerfis()
    }, []);

    async function buscarPerfis() {
        try {
            setPerfis([...await PerfilService.buscarTodos(true)]);
        } catch (error) {
            alert('Ocorreu um erro ao buscar perfis');
            console.log(error);
        }
    }

    async function buscarUsuarios() {
        try {
            setUsuarios([...await UsuarioService.buscarTodos()]);
        } catch (error) {
            alert('Ocorreu um erro ao buscar usuarios');
            console.log(error);
        }
    }

    function handleExibirModal() {
        setExibirModal(oldValue => {

            if (oldValue) {
                setUsuario(undefined);
                buscarUsuarios();
                buscarPerfis();
            }

            return !oldValue;
        })
    }



    return (<>
        {(usuarios.length === 0 || perfis.length === 0) && (<h3>Primeiro faça cadastro de Usuários e Perfis</h3>)}

        {usuarios.length > 0 && perfis.length > 0 && (
            <Table className="mx-2" striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(u => (
                            <tr key={u.id}>
                                <td>{u.nome}</td>
                                <td>{u.email}</td>
                                <td><Button onClick={() => {
                                    setUsuario(u);
                                    handleExibirModal()
                                }} size="sm" variant="success">Perfis</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )}

        {usuario && <ModalVinculoPerfis perfis={perfis} usuario={usuario} handleExibirModal={handleExibirModal} exibirModal={exibirModal} />}
    </>)

}

export default VincularPerfisPage