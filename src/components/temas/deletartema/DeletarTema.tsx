import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import { buscar, deletar } from "../../../services/Service";
import { RotatingSquare } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarTema() {
   
    const navigate = useNavigate();

    const[tema,setTema] = useState<Tema>({} as Tema);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {usuario,handleLogout} = useContext(AuthContext);
    const token = usuario.token;

    const{id}=useParams<{id:string}>();

    async function buscarTemaPorId(id: string) {
                try{
        
                    await buscar(`/temas/${id}`, setTema,{
                        headers: {Authorization: token}
                    })
                    
                }catch(error: any){
                    if(error.toString().includes('401')){
                        handleLogout();
                        
                    }
                }
        
            }

             useEffect(()=>{
                        if(token===''){
                            ToastAlerta("Você precisa estar logado para acessar essa página!", "erro")
                            navigate('/');
                        }}, [token]);
            
                 useEffect(()=>{
                            if(id !== undefined){
                                buscarTemaPorId(id);
                            }}, [id]);        
            
        async function deletarTema(){
                setIsLoading (true)
                try{
                    await deletar(`/temas/${id}`,{
                        headers: {Authorization: token}
                    })
                    ToastAlerta("Tema apagado com sucesso!", "sucesso")
                }catch(error:any){
                    if(error.toString().includes('401')){
                        handleLogout();
                        
                    }else{
                        ToastAlerta("Não foi possível apagar o tema, tente novamente", "erro")
                    }

                }
                setIsLoading (false)
                retornar()
        }   
        
        function retornar(){
                navigate('/temas');
        }                 
   
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar tema</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o tema a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-orange-600 text-white font-bold text-2xl'>
                    Tema
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}
                        >
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-orange-400 
                                   hover:bg-orange-600 flex items-center justify-center'
                                   onClick= {deletarTema}
                                   >
                          {isLoading ? <RotatingSquare
                          visible={true}
                          height="100"
                          width="100"
                          color="#4fa94d"
                          ariaLabel="rotating-square-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                          /> :
                                            <span>Sim</span>
                                          }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarTema