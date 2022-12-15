const Racing = require("./Racing") ;

class App {
    play(){
        const race = new Racing() ;
        race.requestCarNames() ;
    }
}

const app = new App()
app.play() ;
