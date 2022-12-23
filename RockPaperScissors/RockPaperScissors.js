const { Random } = require("@woowacourse/mission-utils");
const { RPS } = require("./Constant");

class RpsGame {
    #comRpsList
    #nowIndex
    #gameCount
    #resultList

    constructor(count) {
        this.#nowIndex = 0;
        this.#comRpsList = []
        this.#gameCount = count;
        this.#resultList = [this.#gameCount, 0, 0, 0];
        this.gameResult
    }

    makeComRps() {
        for (let i = 0; i < this.#gameCount; i++) {
            this.#comRpsList.push(Random.pickNumberInRange(0, 2))
        }
    }

    addGameResult(rps) {
        const val = RPS.RPS.indexOf(rps) - this.#comRpsList[this.#nowIndex];
        this.#nowIndex++;
        if (val === 0) return this.#resultList[3]++;
        if (val === -1) return this.#resultList[2]++;
        if (val === 1) return this.#resultList[1]++;
        if (val === -2) return this.#resultList[1]++;
        if (val === 2) return this.#resultList[2]++;
    }

    showGameResult() {
        return [RPS.RPS[this.#comRpsList[this.#nowIndex - 1]], this.#resultList];
    }

    checkGameEnd() {
        let restCount = this.#gameCount - this.#nowIndex;
        if (Math.min(this.#resultList[1], this.#resultList[2]) + restCount < Math.max(this.#resultList[1], this.#resultList[2]) ||
            this.#nowIndex >= this.#gameCount) {
            if (this.#resultList[1] > this.#resultList[2]) this.gameResult = "승";
            else if (this.#resultList[1] < this.#resultList[2]) this.gameResult = "패";
            else this.gameResult = "무";
            return true;
        }
        return false;
    }
}


module.exports = RpsGame;
