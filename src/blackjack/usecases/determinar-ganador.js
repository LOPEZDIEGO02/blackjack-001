import {  } from "../index.js"


export function determinarGanador (puntosComputadora, puntosJugador){
    if (puntosJugador  === puntosComputadora === 21 ){
        console.log("empate")
    }else if (puntosJugador>21){
        console.log("perdiste")        
    }else if(puntosComputadora >21){
        console.log("ganaste")
    }else if (puntosComputadora > puntosJugador && puntosComputadora < 21) {
        console.log("La computadora gano");
    }else if(puntosComputadora ===21){
        console.log("computadora gano")
    }
    
}