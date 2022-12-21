const Car = require("./Car") ;
const Racing = require("./Racing") ;

describe("Car", () => {
    
    test("go_spotPrint", () => {
        const car = new Car("hello") ;
        car.go(4);
        expect(car.spotPrint()).toBe("hello: -") ;
    })
})

describe("Racing", () => {
    
    test("carNameValidate_예외처리 확인", () => {
        const race = new Racing() ;
        expect(() => {
            race.carNameValidate("aaaaaa")
        }).toThrow("[ERROR]") ;
        expect(() => {
            race.carNameValidate("")
        }).toThrow("[ERROR]") ;
    })

    test("racingCountValidate_예외처리 확인", () => {
        const race = new Racing() ;
        expect(() => {
            race.racingCountValidate(0)
        }).toThrow("[ERROR]") ;
        expect(() => {
            race.racingCountValidate()
        }).toThrow("[ERROR]") ;
    })
})
