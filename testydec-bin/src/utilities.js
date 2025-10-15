"use strict";
/****** Funkcje konwersji *****/ 
function decToBin(dec)
{
    if(dec === 0)
        return 0;
    else
    {
        let bin = "";
        while(dec > 0)
            {
                if(dec % 2 === 0)
                    {
                        bin = '0' + bin;
                    }
                else
                    {
                        bin = '1' + bin;
                    }
                dec = parseInt(dec/2);
            }
        return bin;
    }
}



function binToDec(bin)
{
    let power = 1;
    let dec = 0;
    for(let i = bin.length - 1; i>=0; i--)
        {
            if(bin[i] === "1")
                {
                    dec = dec + power;
                }
                power = power * 2;
        }
        return dec;
}

/*
console.log(decToBin(15));
console.log(decToBin(0));
console.log(binToDec("1111"));
console.log(binToDec("0"));
*/
export{binToDec, decToBin};