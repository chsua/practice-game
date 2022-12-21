
const NUM = {
    MIN: 0,
    MAX: 100,
    UP: "UP",
    DOWN: "DOWN"
}

const GAME = {
    REGAME: 1,
    QUIT: 2,
}

const MESSAGE = {
    START: "게임을 시작합니다.",
    END: "게임을 종료합니다",
    REGAME: "다시 하겠습니까?\n",
    INPUT: "숫자를 입력해주세요.\n",
    RESULT: "게임결과\n총 도전 횟수:",
    ERROR_NUM: "0이상 100이하의 숫자를 입력해주세요.",
    ERROR_REGAME: "1과 2 중 하나를 입력해주세요.",
}

module.exports = { NUM, GAME, MESSAGE };