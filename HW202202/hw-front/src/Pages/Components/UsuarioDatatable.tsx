import { Table } from "react-bootstrap";
import DataTable, { TableColumn } from "react-data-table-component";
import Usuario from "../../interfaces/Usuario";

interface UsuarioDatatableProps {
    usuarios: Usuario[]
}

function UsuarioDatatable(props: UsuarioDatatableProps) {
    return (
        <Table className="my-3" striped bordered hover >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Administrador ?</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.usuarios.map(p => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.email}</td>
                            <td>{p.administrador ? 'Sim' : 'Não'}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table >
    )
}

export default UsuarioDatatable
