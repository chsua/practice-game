const RpsGame = require("./RockPaperScissors");
const Input = require("./Input");
const Output = require("./Output");

class App {
    play() {
        Output.start();
        Input.gameCount(this.gameCountCallback.bind(this))
    }

    gameCountCallback(num) {
        this.rpsGame = new RpsGame(num);
        this.rpsGame.makeComRps();
        Input.rps(this.rpsCallback.bind(this));
    }

    rpsCallback(rps) {
        this.rpsGame.addGameResult(rps);
        let [count, result] = this.rpsGame.showGameResult();
        Output.result(count, result);
        if (this.rpsGame.checkGameEnd()) return Output.end(this.rpsGame.gameResult);
        return Input.rps(this.rpsCallback.bind(this));
    }

}

const app = new App();
app.play();

