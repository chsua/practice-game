const Car = require("./Car") ;

describe("Car", () => {
    
    test("go_spotPrint", () => {
        const car = new Car("hello") ;
        car.go(4);
        expect(car.spotPrint()).toBe("hello: -") ;
    })
})