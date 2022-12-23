const { MESSAGE } = require("./Constant");
const { Console } = require("@woowacourse/mission-utils");

const Output = {
    start() {
        Console.print(MESSAGE.START);
    },

    result(comRps, [count, win, lose, same]) {
        Console.print(`\ncom: ${comRps}`)
        Console.print(`${MESSAGE.OUTPUT_RESULT} ${count}판 중 ${win}승 ${lose}패 ${same}무`)
    },

    error(message) {
        Console.print(message);
    },

    end(result) {
        let message = MESSAGE.WIN;
        if (result === "패") message = MESSAGE.LOSE;
        else if (result === "무") message = MESSAGE.SAME;
        Console.print(message);
        Console.print(MESSAGE.END);
        Console.close();
    }
}

module.exports = Output;

