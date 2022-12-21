const { Random } = require("@woowacourse/mission-utils");
const { NUM, GAME } = require("./Constant");
const OutPut = require("./Output");
const Input = require("./Input");

class UpDownGame {
    #randomNum
    #count

    constructor() {
        this.#randomNum;
        this.#count = 0;
        OutPut.start();
        this.isStart();
    }

    isStart() {
        this.#randomNum = Random.pickNumberInRange(0, 100);
        Input.userNum(this.userNumCallback.bind(this));
    }

    userNumCallback(num) {
        this.#count++
        if (num < this.#randomNum) {
            OutPut.upDown(NUM.UP);
            Input.userNum(this.userNumCallback.bind(this));
        } else if (num > this.#randomNum) {
            OutPut.upDown(NUM.DOWN);
            Input.userNum(this.userNumCallback.bind(this));
        } else {
            OutPut.result(this.#count);
            Input.userRegame(this.userRegameCallback.bind(this));
        }
    }

    userRegameCallback(num) {
        if (GAME.REGAME === num) {
            return this.isRestart();
        }
        return this.isEnd();
    }

    isRestart() {
        this.#count = 0;
        this.#randomNum = Random.pickNumberInRange(0, 100);
        Input.userNum(this.userNumCallback.bind(this));
    }

    isEnd() {
        OutPut.isEnd();
    }
}

module.exports = UpDownGame;
