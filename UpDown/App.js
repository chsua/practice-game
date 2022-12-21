const UpDownGame = require("./UpDownGame");

class App {
    play() {
        const upDownGame = new UpDownGame();
        upDownGame.isStart();
    }
}

const app = new App();
app.play();