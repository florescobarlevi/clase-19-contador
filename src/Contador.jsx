import React, {useState} from "react";
import './contador.css';

//useState es el hook q nos permite actualizar los componentes

//esto es un functional component y como parametro tienen TITLE q es una PROPS 
export const Contador = ( {title} ) => {
    //dentro de la func flecha podemos escribir JS puro - en el return no

    const [contador, setContador] = useState(0)

    const incrementaContador = () => {
        if (contador >= 30 ){
            alert('superaste los 30 elementos')
            contador(30)
        }
        setContador( contador + 1)
    }
    const decrementaContador = () => {
        if (contador <= 0){
            contador(0)
        }
        setContador( contador - 1)
    }
 
    const resetContador = () => {
        setContador(0)
    }
    return(
        //el return nos deja escribir codigo HTML
        //este codigo HTML tienen q tener funcion
        //para eso necesita usar las funciones de JS 
        // las funciones de JS se llaman en HTML con --> onClick{codigo JS}
        <div>
            <h1>{ title }</h1>
            <h2>{ contador }</h2>
            <button onClick={incrementaContador}> +1 </button>
            <button onClick={decrementaContador}> -1 </button>
            <button onClick={resetContador}> RESET </button>
        </div>
    )
}