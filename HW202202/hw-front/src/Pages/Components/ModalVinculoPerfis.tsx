import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { Perfil } from "../../interfaces/Perfil"
import Usuario from "../../interfaces/Usuario"
import UsuarioService from "../../services/UsuarioService";

interface ModalVinculoPerfisProps {
    exibirModal: boolean,
    handleExibirModal: () => void,
    usuario: Usuario,
    perfis: Perfil[],
}

function ModalVinculoPerfis(props: ModalVinculoPerfisProps) {
    const [perfisChecked, setPerfisChecked] = useState<number[]>([]);

    useEffect(() => {
        if (props.exibirModal) {
            setPerfisChecked([...props.usuario.perfis])
        }
    }, [props.exibirModal]);

    async function vincularPerfil(idPerfil: number) {
        try {
            await UsuarioService.VincularPerfil(props.usuario.id, idPerfil);
        } catch (error) {
            alert('Não foi possivel vincular o perfil a esse usuário');
            console.log(error);
        }
    }

    async function desvincularPerfil(idPerfil: number) {
        try {
            await UsuarioService.DesvincularPerfil(props.usuario.id, idPerfil);
        } catch (error) {
            alert('Não foi possivel desvincular o perfil a esse usuário');
            console.log(error);
        }
    }

    const handleCheck = (event: any) => {
        let updatedList = [...perfisChecked];
        let idPerfil = parseInt(event.target.value);

        if (event.target.checked) {
            vincularPerfil(idPerfil);
            updatedList = [...perfisChecked, parseInt(event.target.value)];
        } else {
            desvincularPerfil(idPerfil);
            updatedList.splice(perfisChecked.indexOf(parseInt(event.target.value)), 1);
        }

        setPerfisChecked(updatedList);
    };

    return (
        <Modal show={props.exibirModal}>
            <Modal.Header>
                <Modal.Title>Vincular Perfis ao Usuário {props.usuario.nome}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    {
                        props.perfis.map(p => (
                            <Form.Check
                                key={p.id}
                                type="switch"
                                id="custom-switch"
                                label={p.descricao}
                                value={`${p.id}`}
                                checked={perfisChecked.find(per => per === p.id) != null}
                                onChange={handleCheck}
                            />
                        ))
                    }
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.handleExibirModal} variant="secondary">Fechar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalVinculoPerfis