import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function Navbar() {
  
  const navigate = useNavigate();

  const{handleLogout} = useContext(AuthContext);

  function logout(){
    handleLogout();
    alert('O usuário foi desconectado com sucesso')
    navigate("/")
  }
  
 return (
   <div>
    <header>
      <div id="header_content" className="flex justify-between px-8 py-3  bg-orange-900 text-white ">    
        <div id="titulo" className="text-2xl font-bold ">
          <Link to="/home" className="text-2xl font-bold font-['Sixtyfour_Convergence']">Blog Pessoal
        </Link>
        </div>
        <div id ="menu">
          <ul className="flex gap-4 ">
            <Link to="/" className="hover:text-orange-500">Postagens</Link>
            <Link to="/" className="hover:text-orange-500">Temas</Link>         
            <Link to="/" className="hover:text-orange-500">Cadastrar</Link>
            <Link to="/" className="hover:text-orange-500">Tema</Link>        
            <Link to="/" className="hover:text-orange-500">Perfil</Link>         
            <Link to ="" onClick={logout} className="hover:text-orange-500">Sair</Link> </ul>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Navbar