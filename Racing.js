const { CAR, RACE, MESSAGE } = require("./Constant") ;
const { Console, Random } = require("@woowacourse/mission-utils");
const Car = require("./Car") ;


class Racing {

    requestCarName(){
        Console.readLine(MESSAGE.ASK_CARNAME, (names) => {
            names = names.split(",") ;
        })
    }

    carNameCallback(names){

    }

    carNameValidate(name){
        if ( CAR.CARNAME_MIN > name.length || CAR.CARNAME_MAX < name.length ) throw new Error (MESSAGE.ERROR_CARNAME_LENGTH) ;
    }

    requestRacingCount(){

    }

    racingCountCallback(count){

    }

    racingCountValidate(count){

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