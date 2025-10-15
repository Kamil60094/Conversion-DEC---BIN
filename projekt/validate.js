/*****Funkcje walidacji danych wejściowych*****/

function isBinaryString(s)
{
    return /^[01]+$/.test(s);
}

// ^ - początek łańcucha, $ - koniec łańcucha, [01] - oznacza znaki "0" lub "1", 
// + - jeden lub więcej wystąpień


function  isDecimalString(s)
{
    return /^\d+$/.test(s);
}

// \d - wartość dzisiętna

export {isBinaryString, isDecimalString};