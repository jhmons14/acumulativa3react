export function PostItSalida({postIt, eliminarPostIt}) {
    // const eliminar = () => eliminarPostIt()
    const {id, title, important, description } = postIt;
    const eliminar = () => eliminarPostIt(id);

    if (important) {
        return(
        <div className=".bg-danger">
            <div style={{backgroundColor: "#EC7063"}}>
                <h3 className=".text-danger">{title}</h3>
                <button onClick={eliminar}>X</button>
                <p>{description}</p>
            </div>
        </div>
        )
    }
    return (
        <div className="container">
            <div style={{backgroundColor:"#FFFFCC"}}>
                <h3 >{title}</h3>
                <button onClick={eliminar}>X</button>
                <p>{description}</p>
            </div>
        </div>
    )
}