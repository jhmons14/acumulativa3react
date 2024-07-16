import { useState, useRef } from "react";

export function PostItComponent() {

    const tituloRef = useRef()
    const descripcionRef = useRef()
    const importanciaRef = useRef()

    const [postList, setPostList] = useState([
        {title:'hola', description:'algo', important:true}
    ])
    
    function agregarPostIt() {
        const titulo = tituloRef.current.value;
        const descripcion = descripcionRef.current.value;
        const importancia = importanciaRef.current.checked;

        

        if(titulo.trim()==='' || descripcion.trim()===''){
            alert('campos vacios')
        }

        const newPostIt = {
            title:titulo,
            description:descripcion,
            important:importancia
        }
        const newPostList = [...postList, newPostIt]
        console.log(newPostList);
    }

    return (
        <div className="container">
            <h1>Post It Simulator!</h1>
            <input ref={tituloRef} className="m-2" type="text" placeholder="Titulo"/>
            <input ref={descripcionRef} className="m-2" type="text" placeholder="Descripcion"/>
            <input ref={importanciaRef} type="checkbox" /><label htmlFor="">importante</label>
            <button className="btn btn-primary" onClick={agregarPostIt}>Agregar</button>
        </div>
    )
}