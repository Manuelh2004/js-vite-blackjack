
/** Esto son comentarios avanzados sobre las funciones
 *  y los parametros utilizados
 *  
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo ['A','J','K','Q']
 * @returns {Array<string>} // Returna un array
 *  
 * */   
export const crearDeck = (tiposDeCarta, tiposEspeciales) => { // Para exportar una función se usa el 'const'
    let deck = [];

    if(!tiposDeCarta || tiposDeCarta.length == 0){
        throw new Error("Surgió un error"); 
    }   

    /* Para cartas normales */
    for(let i = 2; i<=10; i++){
        for(let tipo of tiposDeCarta){
            deck.push(i + tipo);
        }
    }
    /* Para cartas especiales */
    for(let tipo of tiposDeCarta){
        for(let especial of tiposEspeciales){
            deck.push(especial + tipo)
        }
    }
    /* shuffle permite mezclar los items de un arreglo*/
    return _.shuffle(deck);
}

 // Exportación de por defecto