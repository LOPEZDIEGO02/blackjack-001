const carro = {
    puertas: 1,
    sillones: 3,
    modelo: 'mazda',
    dondeEstaciono: {
        calle: 'av. las palmas',
        n: 321,
        coordenadas: [12.1234, -52.134143]
    },
    conductor: 'diego',
    personasAdentro: ['hiram', 'liz']
}

console.log('la calle es:', carro.dondeEstaciono.calle);
console.log('las coordenadas son:', carro.dondeEstaciono.coordenadas);
console.log('su nomrbre es:', carro.personasAdentro[0])