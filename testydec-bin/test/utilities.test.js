import { decToBin, binToDec } from "../src/utilities.js"


describe("decimal<->binar", ()=>
    {
        test("Sprawdzanie poprawności decimal->binar liczby 0 na '0'", ()=>
            {
                const dec = 0
                const result = 0

                const res = decToBin(dec)
                expect(res).toBe(result)
            })
        test("Sprawdzanie poprawności decimal->binar liczby 1 na '1'", ()=>
            {
                const dec = 1
                const result = "1"

                const res = decToBin(dec)
                expect(res).toBe(result)
            })
        test("Sprawdzanie poprawności decimal->binar liczby 2 na '10'", ()=>
            {
                const dec = 2
                const result = "10"

                const res = decToBin(dec)
                expect(res).toBe(result)
            })
        test("Sprawdzanie poprawności decimal->binar liczby 5 na '101'", ()=>
            {
                const dec = 5
                const result = "101"

                const res = decToBin(dec)
                expect(res).toBe(result)
            })
        test("Sprawdzanie poprawności decimal->binar liczby 10 na '1010'", ()=>
            {
                const dec = 10
                const result = "1010"

                const res = decToBin(dec)
                expect(res).toBe(result)
            })
        test("Sprawdzanie poprawności decimal->binar liczby 255 na '11111111'", ()=>
            {
                const dec = 255
                const result = "11111111"

                const res = decToBin(dec)
                expect(res).toBe(result)
            })
        test("Sprawdzanie poprawności decimal->binar liczby '0' na 0", ()=>
            {
                const bin = 0
                const result = 0

                const res = binToDec(bin)
                expect(res).toBe(result)
            })
        test("Sprawdzanie poprawności decimal->binar liczby '1' na 1", ()=>
            {
                const bin = "1"
                const result = 1

                const res = binToDec(bin)
                expect(res).toBe(result)
            })
        test("Sprawdzanie poprawności decimal->binar liczby '10' na 2", ()=>
            {
                const bin = "10"
                const result = 2

                const res = binToDec(bin)
                expect(res).toBe(result)
            })
        test("Sprawdzanie poprawności decimal->binar liczby '101' na 5", ()=>
            {
                const bin = "101"
                const result = 5

                const res = binToDec(bin)
                expect(res).toBe(result)
            })
        test("Sprawdzanie poprawności decimal->binar liczby '1010' na 10", ()=>
            {
                const bin = "1010"
                const result = 10

                const res = binToDec(bin)
                expect(res).toBe(result)
            })
        test("Sprawdzanie poprawności decimal->binar liczby '11111111' na 255", ()=>
            {
                const bin = "11111111"
                const result = 255

                const res = binToDec(bin)
                expect(res).toBe(result)
            })
    })