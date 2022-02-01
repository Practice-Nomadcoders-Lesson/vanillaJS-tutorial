/*
4.4 Getting Username
4.5 Saving Username
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //4.2 Events
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME); //4.4
  localStorage.setItem(USERNAME_KEY, username); //4.5
  paintGreetings(username); // 4.6
}

//반복되는 동작을 함수로 만들기 - 4.6
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //4.6

// 프로그램의 제어흐름 - 4.6
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername); // 4.6
}
