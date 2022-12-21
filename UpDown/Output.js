const { MESSAGE } = require("./Constant");
const { Console } = require("@woowacourse/mission-utils");

const Output = {

    start() {
        Console.print(MESSAGE.START);
    },

    upDown(UD) {
        Console.print(UD);
    },

    result(count) {
        Console.print(`${MESSAGE.RESULT}${count}`)
    },

    isEnd() {
        Console.print(MESSAGE.END);
        Console.close();
    },

    error(message) {
        Console.print(message);
    }

}

module.exports = Output;
