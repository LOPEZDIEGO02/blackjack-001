// Esta funcion recibe una carta y retorna un valor
// ejemplo: 3,10,11...
export function obtenerValorCarta( carta ) {
    const cartaCortada = carta.slice(0,carta.length-1)
    console.log(carta)

    if( !isNaN(cartaCortada) ) {
        return Number(cartaCortada);
    } else  if ( cartaCortada == "A") {
        return 11;
    } else {
        return 10;            
    }
        
}
