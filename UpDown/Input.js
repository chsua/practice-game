const { NUM, GAME, MESSAGE } = require("./Constant");
const Output = require("./Output");
const { Console } = require("@woowacourse/mission-utils");

const Input = {
    userNum(callback) {
        Console.readLine(MESSAGE.INPUT, (num) => {
            try {
                this.userNumValidate(+num);
                callback(+num);
            } catch (error) {
                Output.error(error.message);
                this.userNum(callback);
            }
        })
    },

    userNumValidate(num) {
        if (!Number.isInteger(num)) throw new Error(MESSAGE.ERROR_NUM)
        if (num < NUM.MIN || num > NUM.MAX) throw new Error(MESSAGE.ERROR_NUM)
    },

    userRegame(callback) {
        Console.readLine(MESSAGE.REGAME, (num) => {
            try {
                this.regameValidate(+num);
                callback(+num)
            } catch (error) {
                Output.error(error.message);
                this.userRegame(callback);
            }
        })
    },

    regameValidate(num) {
        if (!Number.isInteger(num)) throw new Error(MESSAGE.ERROR_REGAME)
        if (num !== GAME.REGAME && num !== GAME.QUIT) throw new Error(MESSAGE.ERROR_REGAME)
    },
}


module.exports = Input;
