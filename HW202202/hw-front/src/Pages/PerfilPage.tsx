import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap";
import { Perfil } from "../interfaces/Perfil";
import PerfilService from "../services/PerfilService";
import PerfilDatatable from "./Components/PerfilDatatable";

function PerfilPage() {
  const [perfis, setPerfis] = useState<Perfil[]>([]);
  const [perfilFormulario, setPerfilFormulario] = useState<Perfil>({ descricao: '', ativo: false } as Perfil);

  useEffect(() => {
    buscarPerfis()
  }, []);

  async function buscarPerfis() {
    try {
      setPerfis([...await PerfilService.buscarTodos()]);
    } catch (error) {
      alert('Ocorreu um erro ao buscar perfis');
      console.log(error);
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setPerfilFormulario(oldValue => ({ ...oldValue, [name]: value }));
  }

  async function cadastrarPerfil(event: any) {
    event.preventDefault();


    try {
      if (!perfilFormulario.descricao) {
        alert("Você deve preencher o campo Descricao");
        return;
      }

      await PerfilService.Inserir(perfilFormulario);
      buscarPerfis();

    } catch (error) {
      alert('Ocorreu um erro ao inserir o Perfil');
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Perfis</h1>
      <div className="col-md-3 text-start">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicDescricao">
            <Form.Label>Descricao</Form.Label>
            <Form.Control value={perfilFormulario.descricao} onChange={handleInputChange} name="descricao" type="text" placeholder="Descricao" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check checked={perfilFormulario.ativo} onChange={handleInputChange} name="ativo" type="checkbox" label="Ativo?" />
          </Form.Group>
          <Button onClick={cadastrarPerfil} variant="primary" type="submit">
            Cadastrar
          </Button>
        </Form>
      </div>

      {
        perfis.length > 0 && (<PerfilDatatable perfis={perfis} />)
      }
    </div >
  )
}

export default PerfilPage
