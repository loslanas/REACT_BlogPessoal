import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"

function Home() {
    return (
        <>
        <div className="
        flex
        justify-center
        bg-orange-700
        
        ">
            <div className ="
            container
            grid
            grid-cols-2
            text-white
            ">
                <div className="
                flex
                flex-col
                items-center
                justify-center
                gap-4
                py-4
                ">
                    <h2 className="
                    text-5xl
                    font-bold
                    
                    ">
                        Seja Bem Vinde!
                        </h2>
                    <p className="text-x1">
                        Expresse aqui seus pensamentos e
                        opiniões
                    </p>
                    <div className="
                    flex
                    justify-around
                    gap-2">
                        <div className="
                        rounded
                        border-white
                        border-solid
                        border-2
                        py-2
                        px-4
                        text-white
                        hover:text-orange-500 hover:bg-orange-800 hover:border-orange-800">
                        <ModalPostagem />
                            </div>
                    </div>
                </div>
 
                <div className="flex justify-center">
                   
                   
                   
                    <img
                        src="https://ik.imagekit.io/22g34n0mo/SVG/Static%20assets-amico.svg?updatedAt=1739556491194"
                        alt="Imagem da Página Home"
                        className="w-2/3"
                       
                    />
                </div>
            </div>
        </div>
        <ListaPostagens/>
        </>
    )
}
 
export default Home
 