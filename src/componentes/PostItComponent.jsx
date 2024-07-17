import { useState, useRef } from "react";
import { PostItSalida } from "./PostItSalida";
import { v4 as uuid } from 'uuid';

export function PostItComponent() {

    const tituloRef = useRef()
    const descripcionRef = useRef()
    const importanciaRef = useRef()

    const [postList, setPostList] = useState([
        {id:uuid(), title:'hola', description:'algo', important:false}
    ])
    
    function agregarPostIt() {
        const titulo = tituloRef.current.value;
        const descripcion = descripcionRef.current.value;
        const importancia = !importanciaRef.current.checked;

        

        if(titulo.trim()==='' || descripcion.trim()===''){
            alert('campos vacios')
        }

        const newPostIt = {
            id: uuid(),
            title:titulo,
            description:descripcion,
            important:importancia
        }
        const newPostList = [...postList, newPostIt]
        console.log(newPostList);
        setPostList(newPostList) //aca renderiza o actualiza cada vez que hace un cambio.
    }

    function eliminarPostIt(id) {
        console.log('hola');
        const postIts = postList.filter(post => post.id === id)
        console.log(postIts);
        setPostList(postIts)
    }

    return (
        <div className="container">
            <h1>Post It Simulator!</h1>
            <input ref={tituloRef} className="m-2" type="text" placeholder="Titulo"/>
            <input ref={descripcionRef} className="m-2" type="text" placeholder="Descripcion"/>
            <input ref={importanciaRef} type="checkbox" /><label htmlFor="">importante</label>
            <button className="btn btn-primary" onClick={agregarPostIt}>Agregar</button>
            {/* <button onClick={eliminarPostIt}>x</button> */}
            <div>
                {postList.map(postIt => <PostItSalida eliminarPostIt={eliminarPostIt} postIt={postIt} key={postIt.id} />)}
            </div>
        </div>
    )
}