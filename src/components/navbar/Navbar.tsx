import React from 'react'

function Navbar() {
  return (
   <div>
    <header>
      <div id="header_content" className="flex justify-between px-8 py-3  bg-indigo-800 text-white ">    
        <div id="titulo" className="text-2xl font-bold ">
          <a href ="#" id="">Blog Pessoal
        </a>
        </div>
        <div id ="menu">
          <ul className="flex gap-4 ">
            <li><a href="#" className="hover:text-orange-500">Postagens</a></li>
            <li><a href="#" className="hover:text-orange-500">Temas</a></li>         
            <li><a href="#" className="hover:text-orange-500">Cadastrar</a></li>
            <li><a href="#" className="hover:text-orange-500">Tema</a></li>        
            <li><a href="#" className="hover:text-orange-500">Perfil</a></li>         
            <li><a href="#" className="hover:text-orange-500">Sair</a></li> </ul>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Navbar