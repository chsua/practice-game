## 초간단 자동차 경주 게임을 구현 ##

주어진 횟수 동안 **n** 대의 자동차는 전진 또는 멈출 수 있다.

**자동차에 이름**을 부여할 수 있다.
전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
자동차 이름은 *쉼표(,)*를 기준으로 구분하며 이름은 *5자 이하*만 가능하다.

사용자는 몇 번의 이동을 할 것인지를 *입력*할 수 있어야 한다.
전진하는 조건은 *0에서 9* 사이에서 무작위 값을 구한 후 *무작위 값이 4 이상*일 경우이다.

자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 *한 명 이상*일 수 있다.
우승자가 여러 명일 경우 *쉼표(,)*를 이용하여 구분한다.
사용자가 잘못된 입력 값을 작성한 경우 *alert > 임의로 [ERROR]* 을 이용해 메시지를 보여주고, 
다시 입력할 수 있게 한다.

## ps ##
* 자바스크립트 코드 컨벤션을 지키면서 프로그래밍 한다.
* indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
* 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
* 변수 선언시 var 를 사용하지 않는다. const 와 let 을 사용한다.
* import 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import
* 함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.
* 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.

---

## constant ##

* CARNAME_MIN: 1,
* CARNAME_MAX: 5,
* GOSTANDARD: 4,
* ERROR_CARNAME_LENGTH: "[ERROR]5자 이내로 입력해주세요.",

---

## car ##

* class car 
* constructor = name, 현 위치
* 전진하는 함수
* 전진한거 보여주는 함수

---
## racing ##

* input 받아서 차 만들기
* input 받아서 몇 회로 할지 하기
* random 돌려서 차별로 전진하게 하기
* 차별로 어디까지 갔는지 확인하는 함수
* 레이싱 결과 보여주기




