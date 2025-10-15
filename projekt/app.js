"use strict"

import { binToDec, decToBin } from "./utilities.js";
import { isBinaryString, isDecimalString } from "./validate.js";


/******* UI i logika aplikacji *******/
const elModeBinDec = document.getElementById("modeBinDec");
const elModeDecBin = document.getElementById("modeDecBin");
const elInputLabel = document.getElementById("inputLabel");
const elInputValue = document.getElementById("inputValue");
const elConvert = document.getElementById("Convert");
const elResult = document.getElementById("result");
let mode = "BIN_DEC";

//Przełącznik kierunku konwersji
function setMode(newMode)
{
    mode = newMode;
    if(mode === "DEC_BIN")
    {
        elInputLabel.textContent = "Liczba dzisiętna";
        elInputValue.setAttribute("placeholder", "np. 8"); 
    }
    else
    {
        elInputLabel.textContent = "Liczba binarna";
        elInputValue.setAttribute("placeholder", "np. 1010")
    }
    elResult.textContent = "Wynik: "
    elInputValue.value = ""; 
}
//Walidacja
elConvert.addEventListener("click", ()=>{
    if(mode === "BIN_DEC")
        if(console.log(isBinaryString(elInputValue)) == false)
            elResult.textContent = "Wynik: Wpisano niepoprawne liczby!!!"; 
    else
        if(console.log(isDecimalString(elInputValue)) == false)
            elResult.textContent = "Wynik: Wpisano niepoprawne liczby!!!"; 
});


elConvert.addEventListener("click", ()=>{
    if(mode === "BIN_DEC"){
        if(isBinaryString(elInputValue.value) === true)
            {
                elResult.textContent = "Wynik: " + binToDec(String(elInputValue.value));
            }
    else
        elResult.textContent = "Wynik: Wpisano niepoprawne liczby!!!";
}
    if(mode === "DEC_BIN"){
        if(isDecimalString(elInputValue.value) === true)
            {
                elResult.textContent = "Wynik: " + decToBin(Number(elInputValue.value));
            }
    else
        elResult.textContent = "Wynik: Wpisano niepoprawne liczby!!!";
}});

elModeBinDec.addEventListener("click", ()=>(setMode("BIN_DEC")));
elModeDecBin.addEventListener("click", ()=>(setMode("DEC_BIN")));

/*Testy Walidacji
console.log(isBinaryString("1001"))
console.log(isBinaryString(1001))
console.log(isBinaryString("18"))

console.log(isDecimalString("18"))
console.log(isDecimalString(209))
console.log(isDecimalString("kaka"))
*/