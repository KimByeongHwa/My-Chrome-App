const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // toDos의 value값을 문자열로 전환. 후에 parsed를 통해 배열로 만듦.
}

function deleteToDo(event){
    const li = event.target.parentElement; // 여러 개의 ❌버튼 중 어떤 li인지를 target의 parentElement로 구분.
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // toDo.id 중 li.id 와 다른 id값만 남긴다.
    saveToDos(); // 새로고침돼도 유지되도록 db에 저장.
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodo.text; // 여기서의 newTodo는 handleTodoSubmit에서 온 newTodo이다. 즉, 사용자가 입력한 input값.
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span); // li에 span을 넣었다.
    li.appendChild(button);
    toDoList.appendChild(li); // 완성한 li를 toDOList에 추가한다.
    console.dir(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), // 각각의 list를 구별하기 위하여 사용
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){ // 위에서 stringify 시킨 todos를 배열로 만들어주는 함수.
    const parsedToDo = JSON.parse(savedToDos);
    toDos = parsedToDo; // 새로고침해도 이전의 배열들이 날아가지 않도록 저장돼있던 배열을 빈 배열(toDos[])에 저장해준다.
    parsedToDo.forEach(paintToDo);
}

