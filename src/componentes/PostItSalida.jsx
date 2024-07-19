import clases from './style.module.css'
export function PostItSalida({postIt, eliminarPostIt}) {
    // const eliminar = () => eliminarPostIt()
    const {id, title, important, description } = postIt;
    const eliminar = () => eliminarPostIt(id);


    if (important) {
        return(
        <div className={clases.contenedor}> 
            <div className={clases.importante}>
                <button className={clases.btn} onClick={eliminar}>X</button>
                <h3 className=".text-danger">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
        )
    }
    return (
        <div className={clases.contenedor}>
            <div className={clases.noImportante}>
                <button className={clases.btn} onClick={eliminar}>X</button>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
