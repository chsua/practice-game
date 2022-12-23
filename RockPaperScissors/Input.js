const { RPS, MESSAGE } = require("./Constant");
const Output = require("./Output");
const { Console } = require("@woowacourse/mission-utils");

const Input = {
    gameCount(callback) {
        Console.readLine(MESSAGE.INPUT_COUNT, (num) => {
            try {
                this.gameCountValidate(+num);
                callback(+num);
            } catch (error) {
                Output.error(error.message);
                this.gameCount(callback);
            }
        })
    },

    gameCountValidate(num) {
        if (!Number.isInteger(num)) throw new Error(MESSAGE.ERROR_COUNT);
        if (num < RPS.MIN || num > RPS.MAX) throw new Error(MESSAGE.ERROR_COUNT);
    },

    rps(callback) {
        Console.readLine(MESSAGE.INPUT_RPS, (rps) => {
            try {
                this.rpsValidate(rps.toUpperCase());
                callback(rps.toUpperCase());
            } catch (error) {
                Output.error(error.message);
                this.rps(callback);
            }
        })
    },

    rpsValidate(rps) {
        if (!RPS.RPS.includes(rps)) throw new Error(MESSAGE.ERROR_RPS);
    }

}

module.exports = Input;
