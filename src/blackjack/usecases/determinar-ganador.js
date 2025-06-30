
export function determinarGanador (puntosComputadora, puntosJugador){
    if (puntosJugador === 21 && puntosComputadora === 21) {
    alert("Empate");
    console.log("Empate");
}else if (puntosJugador>21){
        alert("perdiste")        
        console.log("perdiste")        
    }else if(puntosComputadora >21){
        alert("ganaste")
        console.log("ganaste")
    }else if (puntosComputadora > puntosJugador && puntosComputadora < 21) {
        alert("La computadora gano");
        console.log("La computadora gano");
    }else if(puntosComputadora ===21){
        alert("computadora gano")
        console.log("computadora gano")


    }
    

}