import html from "./app.html?raw"

export function App(elementId){

    const startComponente = () =>{

        const app = document.createElement('div')
        app.innerHTML= html
        document.querySelector(elementId).append(app)
    }

}