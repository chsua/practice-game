## RockPaperScissors ##

1. 게임 시작 멘트 output
2. 게임 횟수 받기 input
    * 1 ~ 10회
    * 만약 절반 이상 이기면 조기종료되도록함
3. com 가위바위보 정하기
4. user 가위바위보 input
    * 오류값 처리
5. 결과값 output
    * com 가위바위보 
    * 게임결과: 승 / 0전 0승 0패 0무승부
6. 절반 이상 승이거나 패, 또는 게임 횟수가 끝났으면 종료 / 또는 다시 3으로 가기
7. 게임종료 멘트 output

---
## Input ##
* gameCount
* rps

---
## Output ## 
* start
* end
* result
* error

---
## rps ##
* 초기값 설정: gameCount, 
* 랜덤으로 rps 만들기
* comRps 와 userRps 비교하기
* 결과 판독하기
* 과반으로 승부 결정되었는지 판단하기

---
## constant ##
* rps = ... 
* Message = input, output, start, end, error

