import { Table } from "react-bootstrap";
import DataTable, { TableColumn } from "react-data-table-component";
import { Perfil } from "../../interfaces/Perfil";

interface PerfilDatatableProps {
    perfis: Perfil[]
}

function PerfilDatatable(props: PerfilDatatableProps) {
    return (
        <Table className="my-3" striped bordered hover >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Descricao</th>
                    <th>Ativo ?</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.perfis.map(p => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.descricao}</td>
                            <td>{p.ativo ? 'Sim' : 'Não'}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table >
    )
}

export default PerfilDatatable
