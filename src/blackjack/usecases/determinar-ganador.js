
export function determinarGanador (puntosComputadora, puntosJugador){
    if (puntosJugador === 21 && puntosComputadora === 21) {
    alert("Empate");
    }else if (puntosJugador>21){
        alert("perdiste")        
    }else if(puntosComputadora >21){
        alert("ganaste")
    }else if (puntosComputadora > puntosJugador && puntosComputadora < 21) {
        alert("La computadora gano");
    }else if(puntosComputadora ===21){
        alert("computadora gano")

    }
    

}