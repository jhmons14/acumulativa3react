export function PostItSalida({postIt, eliminarPostIt}) {
    // const eliminar = () => eliminarPostIt()
    const {id, title, important, description } = postIt;
    const eliminar = () => eliminarPostIt(id);

    return (
        <div className="container .bg-danger">
            <div>
                <h3>{title}</h3>
                <button onClick={eliminar}>X</button>
                <p>{description}</p>
            </div>
            
            
        </div>
    )
}