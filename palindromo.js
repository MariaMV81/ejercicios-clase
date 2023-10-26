/**
Ejercicio Palindrome
Generar un algoritmo que nos compruebe si el string introducido es un palindromo. Se dice que un
string es palindromo cuando se puede leer igual de izquierda a derecha que de derecha a izquierd*/

const palabra = "aaasss";
let i = 0;
let palindromo = true;

do{
    if ( palabra[i] !== palabra [ palabra.length - i -1]){
        palindromo = false;
    }

}while((i < palabra.length /2) && palindromo );

console.log(palindromo);
