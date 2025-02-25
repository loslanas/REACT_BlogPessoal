import {ReactNode, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { ToastAlerta } from '../../utils/ToastAlerta';

function Navbar() {
  
  const navigate = useNavigate();

  const{usuario,handleLogout} = useContext(AuthContext);

  function logout(){
    handleLogout();
    ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
    navigate("/")
  }

  let component:ReactNode

  if(usuario.token !==""){

    component = (
  
   <div>
    <div>
      <div id="header_content" className="flex justify-between px-8 py-3  bg-orange-900 text-white ">    
        <div id="titulo" className="text-2xl font-bold ">
          <Link to="/home" className="text-2xl font-bold font-['Sixtyfour_Convergence']">Blog Pessoal
        </Link>
        </div>
        <div id ="menu">
          <ul className="flex gap-4 ">
            <Link to="/postagens" className="hover:text-orange-500">Postagens</Link>
            <Link to="/temas" className="hover:text-orange-500">Temas</Link>         
            <Link to='/cadastrartema' className="hover:text-orange-500">Cadastrar Tema</Link>      
            <Link to="/perfil" className="hover:text-orange-500">Perfil</Link>         
            <Link to ="" onClick={logout} className="hover:text-orange-500">Sair</Link> </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

return(
  <>
  {component}
  </>
)
}

export default Navbar