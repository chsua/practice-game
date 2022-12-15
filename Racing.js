const { CAR, RACE, MESSAGE } = require("./Constant") ;
const { Console, Random } = require("@woowacourse/mission-utils");
const Car = require("./Car") ;


class Racing {
    #racingCount
    #nowRacing
    #carList 

    constructor(){
        this.#racingCount = 0 ;
        this.#nowRacing = 0 ;
        this.#carList = [] ;
    }

    requestCarNames(){
        Console.readLine(MESSAGE.ASK_CARNAME, (names) => {
            names = names.split(",") ;
            try{
                this.carNameCallback(names) ;
            } catch (error ){
                Console.print(error);
                this.requestCarNames() ;
            }
        })
    }

    carNameCallback(names){
        names.forEach(name => {
            this.carNameValidate(name)
            this.#carList.push(new Car(name)) ;
        }) ;
        
    }

    carNameValidate(name){
        if ( CAR.CARNAME_MIN > name.length || CAR.CARNAME_MAX < name.length ) throw new Error (MESSAGE.ERROR_CARNAME_LENGTH) ;
    }

    requestRacingCount(){
        Console.readLine(MESSAGE.ASK_RACINGCOUNT, ( count ) => {
            
        })
    }

    racingCountCallback(count){

    }

    racingCountValidate(count){
        if ( !Number.isInteger(count)) throw new Error (MESSAGE.ERROR_RACECOUNT_LENGTH) ;
        if ( count <= 0 ) throw new Error (MESSAGE.ERROR_RACECOUNT_LENGTH) ;
    }

    makeRandomNum(){

    }

    printResultStart(){

    }

    printCarSpot(){

    }

    printWinner(){

    }


}

module.exports = Racing ;