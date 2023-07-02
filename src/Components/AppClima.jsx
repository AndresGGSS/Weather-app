import Resultado from "./Resultado"
import Formulario from "./Formulario"
import useClima from "../Hooks/useClima"
import Spinner from "./Spinner"

export default function AppClima() {

    const {resultado, cargando, noResultado} = useClima()

    return (
        <>
            <main className="dos-columnas">
                <Formulario/>
                {cargando ? <Spinner/> : resultado?.name ? <Resultado/> : noResultado ? <p>{noResultado}</p> : <p>El clima se va a mostrar aqui</p>}
            </main>
        </>
    )
}
