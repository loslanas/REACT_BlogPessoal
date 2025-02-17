import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { data } from 'react-router-dom'

function Footer() {
  let data = new Date().getFullYear();
  
  return (
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

export default Footer