/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

let pal1 = 'roma'
let pal2 = 'amor'

function sonAnagramas(val1, val2){

    let aux = []

    for(let i = 0; i <= val1.length; i++){
        
        for(let a = 0; a <= val2.length; a++){
            if(val1[i] === val2[a]){
                aux.push(val1[i])
            }
        }
    }

    let palabraAux = aux.join('')
    if(palabraAux === val1){
        return true
    } else{
        return false
    }
}

console.log(sonAnagramas(pal1, pal2))