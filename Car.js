const { CAR, RACE, MESSAGE } = require("./Constant") ;

class Car {
    #nowSpot
    #name

    constructor(name){
        this.#name = name ;
        this.#nowSpot = 0 ; 
    }

    go(num){
        if (num >= RACE.GOSTANDARD ){
            this.#nowSpot += 1 ;
        }
    }

    spotPrint(){
        return `${this.#name}: ${"-".repeat(this.#nowSpot)}` ;
    }



}

module.exports = Car ;
