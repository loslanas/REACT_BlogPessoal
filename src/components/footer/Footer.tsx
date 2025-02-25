<<<<<<< HEAD
=======
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
>>>>>>> Perfil_Alertas

function Footer() {
  let data = new Date().getFullYear();
  const{usuario} = useContext(AuthContext)

  let component: ReactNode

  if(usuario.token !== ""){

  
  component = (
    <div>
    
    <footer className="flex  bottom-0 left-0 flex-col items-center px-8 py-3  bg-orange-900 text-white  s">
    <p className="font-bold">Blog Pessoal Generation / Copyright: {data}</p>
    <p>Acesse minhas redes sociais</p>
    <div id="icons_sociais" className="flex py-1 gap-1.5 text-orange-600"> 
    <a href="https://www.linkedin.com/in/fernando-lana/" target="_blank" className="hover:text-orange-400">
    <LinkedinLogo size={48}  weight="light" />
    </a>
    <a href="https://github.com/loslanas" target="_blank" className="hover:text-orange-400">
    <GithubLogo size={48}  weight="light" /></a>
    <a href="https://www.instagram.com/ow_lana/" target="_blank" className="hover:text-orange-400">
    <InstagramLogo size={48}  weight="light" /></a>
    </div>



    </footer>


    </div>
  )
}
return(
  <>
  {component}
  </>
)
}

export default Footer