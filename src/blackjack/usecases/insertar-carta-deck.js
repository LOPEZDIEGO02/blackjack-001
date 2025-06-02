

export function insertarCartaDeck( carta, deck ) {
    // creo mi imagen
    const milimagen = document.createElement("img");

    milimagen.src=`assets/cartas/${carta}.png`
    milimagen.className="carta"
    
    // inserto mi imagen
    document.querySelector( deck ).append(milimagen)
}