import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import UsuarioPage from './Pages/UsuarioPage';
import { Button, Container } from 'react-bootstrap';
import PerfilPage from './Pages/PerfilPage';
import VincularPerfisPage from './Pages/VincularPerfisPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Container style={{ maxWidth: '800px' }} className="text-center" fluid>
        <h1>HW - UNIVALI</h1>
        <h2>ÂNDERSON GUIMARÃES SOARES</h2>
        <Link to="/"><Button variant="primary">Vincular Perfis</Button></Link>
        <Link to="/Usuarios"><Button className="ms-2" variant="primary">Cadastrar Usuário</Button></Link>
        <Link to="/Perfis"><Button className="ms-2" variant="primary">Cadastrar Perfil</Button></Link>
        <hr />


        <Routes>
          <Route path="/" element={<VincularPerfisPage />} />
          <Route path="/Usuarios" element={<UsuarioPage />} />
          <Route path="/Perfis" element={<PerfilPage />} />
          <Route path="*"element={<Navigate to="/" />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  </React.StrictMode >
)
