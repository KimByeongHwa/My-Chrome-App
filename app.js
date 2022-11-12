const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input"); // === document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); // preventDefault()는 브라우저의 기본 동작을 막아준다. => submit 시 새로고침(submit의 기본동작은 새로고침) 방지
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`; // 비어있는 h1태그에 innerText값 채워준다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); // submit은 기본적으로 새로고침을 발생시키는 성질이 있다.
}
else{
    paintGreetings(savedUsername);
}