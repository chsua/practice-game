const { CAR, MESSAGE } = require("./Constant") ;
const { Console, Random } = require("@woowacourse/mission-utils");
const Car = require("./Car") ;


class Racing {
    #nowRacing
    #carList 

    constructor(){
        this.#nowRacing = 0 ;
        this.#carList = [] ;
    }

    requestCarNames(){
        Console.readLine(MESSAGE.ASK_CARNAME, (names) => {
            try{
                this.carNameCallback(names.split(",")) ;
            } catch (error ){
                Console.print(error);
                this.#carList = [] ;
                this.requestCarNames() ;
            }
        })
    }

    carNameCallback(names){
        names.forEach(name => {
            this.carNameValidate(name)
            this.#carList.push(new Car(name)) ;
        }) ;
        this.requestRacingCount() ;
    }

    carNameValidate(name){
        if ( CAR.CARNAME_MIN > name.length || CAR.CARNAME_MAX < name.length ) throw new Error (MESSAGE.ERROR_CARNAME_LENGTH) ;
    }

    requestRacingCount(){
        Console.readLine(MESSAGE.ASK_RACINGCOUNT, ( count ) => {
            try {
                this.racingCountCallback(+count) ;
            } catch (error){
                Console.print(error) ;
                this.requestRacingCount() ;
            }
        })
    }

    racingCountCallback(count){
        this.racingCountValidate(count) ;
        this.printResultStart() ;
        for ( this.#nowRacing ; this.#nowRacing < count ; this.#nowRacing++ ){
            this.racing() ;
            Console.print("") ;
        }
        this.printWinner() ;
        Console.close() ;
    }

    racingCountValidate(count){
        if ( !Number.isInteger(count)) throw new Error (MESSAGE.ERROR_RACECOUNT_LENGTH) ;
        if ( count <= 0 ) throw new Error (MESSAGE.ERROR_RACECOUNT_LENGTH) ;
    }

    racing(){
        this.#carList.forEach( car => {
            car.go(this.makeRandomNum()) ;
            Console.print(car.spotPrint()) ;
        })
    }

    makeRandomNum(){
        return Random.pickNumberInRange(0, 9);
    }

    printResultStart(){
        Console.print("실행결과\n")
    }

    printWinner(){
        let winnerCount = 0, winner = [] ;
        this.#carList.forEach( x => {
            let [name, spot] = x.rank()
            if ( spot === winnerCount ) {
                winner.push(name) ;
            } else if (spot > winnerCount){
                winner = [name] ;
                winnerCount = spot ;
            }
        })
        Console.print (`최종 우승자: ${winner.join(", ")}`) ;
    }


}

module.exports = Racing ;