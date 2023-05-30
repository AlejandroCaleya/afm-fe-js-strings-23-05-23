function ej1() {
let texto = prompt ('Introduce un texto:');
let textoMayusc= texto.toUpperCase();
alert(textoMayusc);
}

function ej2() {
    let texto = prompt ('Introduce un texto:');
    let textoguion = texto.split('').join('-');
    alert(textoguion);
}


function ej3() {
    let texto = prompt ('Introduce un texto:');
    let contador= 0;

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        let letraMinus = letra.toLowerCase();
            if 
                (letraMinus == 'a' ||
                letraMinus == 'e' ||
                letraMinus == 'i' ||
                letraMinus == 'o' ||
                letraMinus == 'u'
                ) 
        contador++;
            }
            alert('El texto contiene ' + contador + ' vocales');
    }

function ej4() {
    let texto = prompt ('Introduce un texto:');
    let contenido= '';


    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
            if (letra == "(") { 
                for (let y = i; letra != ")" ; y++) {
                    letra = texto[y];
                    contenido = contenido + letra;
                }
            }
        }
        let palabra = contenido.substring(1, contenido.length - 1);
        alert(palabra);
}