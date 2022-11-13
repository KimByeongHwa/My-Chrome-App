# My-Chrome-App
제작 기간: 2022.11.12 ~ 
<br>
<br>
<br>
> ### greetings.js

1. Logic<br>
    - `local storge`에 저장된 `username`이 존재하지 않으면(null이면) login-form을 띄우고,<br>
    key/value 값이 존재하면 greeting-form을 띄운다.

2. 배운 점
    - `form`의 요소인 `input`의 기본 제공 기능을 사용하였다. (maxlength, required...)
    - `preventDefault()` 을 처음 배웠다. 의도치 않은 브라우저의 기본 동작을 방지하기 위해 사용하는데,<br>
      여기선 submit의 기본 성질인 '새로고침' 현상을 막기 위해 사용하였다.<br>
    - `local storge`의 사용이 생각보다 간단했다. `localStorage.setItem(USERNAME_KEY, username);`
    - `innerText`를 사용하여 js를 통해 html을 제어할 수 있었다.
    - login-form과 greeting-form의 전환은 `display: none`을 이용한다.
<br>

> ### clock.js

1. Logic<br>
    - js가 기본적으로 제공하는 `Date()`를 이용하였다.<br>
    `const date = new Date();`

2. 배운 점
    - `setInterval()`을 이용하여 초 단위로 업데이트해주었다.
<br>

> ### quotes.js

1. Logic<br>
    - `quotes` 객체를 생성하고, `Math.random()`을 이용하여 각 요소를 랜덤하게 꺼낸다.
    
2. 배운 점
    - `innerText`를 사용하여 `todeayQuote`를 html에 랜덤하게 렌더링하였다.
<br>

> ### background.js

1. Logic<br>
    - 이미지 파일들을 객체에 담고 랜덤하게 뽑을 수 있도록 하였다.<br>
    `const chosenImage = images[Math.floor(Math.random()*images.length)];`
    
2. 배운 점
    - `createElement("img")`을 통해서 js에서 html에 element를 생성할 수 있다는 것을 처음 배웠다.
    - 만든 element에 src를 부여했다. ````bgImage.src = `img/${chosenImage}`;````
    - 만든 걸 `appendChild()`를 통해 body에 붙여주었다. `document.body.appendChild(bgImage);`
