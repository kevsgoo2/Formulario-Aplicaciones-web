export default function Boton({tipo, nombre = "button"}){
    return(
        <div>
            <button typer={tipo}>{nombre}</button>
        </div>
    )
}