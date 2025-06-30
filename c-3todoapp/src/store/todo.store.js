// import { Tarea } from "../todos/models/todo.model";



const  misCosas ={
    tareas: [],
    filtros: []
};

export const obtenerTareas = () =>{
    return misCosas.tareas
}

misCosas.tareas.push("simulación")
console.log(misCosas.tareas)


