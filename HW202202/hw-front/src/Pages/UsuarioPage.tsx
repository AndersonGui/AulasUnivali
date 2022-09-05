import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap";
import Usuario from "../interfaces/Usuario";
import UsuarioService from "../services/UsuarioService";
import UsuarioDatatable from "./Components/UsuarioDatatable";

function UsuarioPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [usuarioFormulario, setUsuarioFormulario] = useState<Usuario>({ nome: '', email: '', senha: '', administrador: false } as Usuario);

  useEffect(() => {
    buscarUsuarios()
  }, []);

  async function buscarUsuarios() {
    try {
      setUsuarios([...await UsuarioService.buscarTodos()]);
    } catch (error) {
      alert('Ocorreu um erro ao buscar usuarios');
      console.log(error);
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setUsuarioFormulario(oldValue => ({ ...oldValue, [name]: value }));
  }

  async function cadastrarUsuario(event: any) {
    event.preventDefault();


    try {
      if (!usuarioFormulario.nome) {
        alert("Você deve preencher o campo Nome");
        return;
      }

      if (!usuarioFormulario.email) {
        alert("Você deve preencher o campo Email");
        return;
      }

      if (!usuarioFormulario.senha) {
        alert("Você deve preencher o campo Senha");
        return;
      }

      await UsuarioService.Inserir(usuarioFormulario);
      buscarUsuarios();

    } catch (error) {
      alert('Ocorreu um erro ao inserir o usuário');
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Usuarios</h1>
      <div className="col-md-3 text-start">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control value={usuarioFormulario.nome} onChange={handleInputChange} name="nome" type="text" placeholder="Nome" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control value={usuarioFormulario.email} onChange={handleInputChange} name="email" type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSenha">
            <Form.Label>Senha</Form.Label>
            <Form.Control value={usuarioFormulario.senha} onChange={handleInputChange} name="senha" type="password" placeholder="Senha" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check checked={usuarioFormulario.administrador} onChange={handleInputChange} name="administrador" type="checkbox" label="É Administrador?" />
          </Form.Group>
          <Button onClick={cadastrarUsuario} variant="primary" type="submit">
            Cadastrar
          </Button>
        </Form>
      </div>

      {
        usuarios.length > 0 && (<UsuarioDatatable usuarios={usuarios} />)
      }
    </div >
  )
}

export default UsuarioPage
