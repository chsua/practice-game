const RPS = {
    MIN: 1,
    MAX: 10,
    RPS: ["ROCK", "PAPER", "SCISSOR"]
}

const MESSAGE = {
    START: "게임을 시작합니다.\n",
    END: "\n게임을 종료합니다.",
    WIN: "당신의 승리!",
    LOSE: "당신의 패배!",
    SAME: "무승부!",
    INPUT_COUNT: "게임 횟수를 정해주세요. (1 이상 10 이하)\n",
    INPUT_RPS: "\nRock Paper Scissors!\n",
    OUTPUT_RESULT: "현재 점수:",
    ERROR_COUNT: "[ERROR] 1이상 10이하로 입력해주세요.",
    ERROR_RPS: "[ERROR] Rock Paper Scissors!!!!!",
}

module.exports = { RPS, MESSAGE };