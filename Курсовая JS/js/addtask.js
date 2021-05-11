'use strict';

// СОБИРАЕМ ДАННЫЕ В ОБЪЕКТ И СОХРАНЯЕМ В ЛОКАЛЬНОЕ ХРАНИЛИЩЕ

let form = document.forms.form;
form.addEventListener("submit", addTask);

function addTask(event){
    event.preventDefault();
    let title = form.elements.title.value;
    let description = form.elements.description.value;
    let date = form.elements.date.value;
    // let nameuser = form.elements.nameuser.value;
    let taskObj = {};
    taskObj["title"] = title;
    taskObj["description"] = description;
    taskObj["date"] = date;
    // taskObj["nameuser"] = nameuser;
    let storage = localStorage;
    let tasks = JSON.parse(storage.getItem("tasks"));
    if(!tasks) tasks = [];
    tasks.push(taskObj);
    let arrToJson = JSON.stringify(tasks);
    console.log(arrToJson);
    storage.setItem("tasks", arrToJson);
};

// ДОБАВЛЯЕМ УЧАСТНИКА

let adduser = document.getElementById('adduser');
let newuser = document.getElementById('newuser');

adduser.addEventListener('click', () => {

 let div =  document.createElement('div');

 let input = document.createElement('input');
 input.type = 'text';
 input.placeholder = 'Введите имя участника';
 input.name = 'nameuser';

 let adduser = document.createElement('button');
 adduser.innerHTML = 'X';

 div.appendChild(input);
 div.appendChild(adduser);

 newuser.appendChild(div);
  
adduser.addEventListener('click', (event) => {
    div.remove();
  })
});


// ПРОВЕРКА НА ВВОД ДАННЫХ И ОТПРАВКА В ЛОКАЛЬНОЕ ХРАНИЛИЩЕ

let taskForm = document.forms["addtask"];

let nameRules = {
  elem: taskForm.elements.nametask,
  maxLength: 20,
  minLength: 1,
  errorField: document.getElementById("name-error")
};

let validator = {
  checkMinLen(rule){
      if ((rule.elem.value.length > rule.maxLength) || (rule.elem.value.length < rule.minLength)){
          rule.errorField.innerText =
              "Значение должно быть в диапазоне от 1 до 20 симовлов";
          return false;
      }
      rule.errorField.innerText = "";
      return true;
  }
}
taskForm.elements.nametask
    .addEventListener("keyup", validator.checkMinLen.bind(null, nameRules));


    taskForm.addEventListener("submit", (event)=>{
      event.preventDefault();
      if (!validator.checkMinLen(nameRules) || !validator.checkMinLen(nameRules)){
          console.log("Данные нельзя отправлять на сервер");
      } else {
          console.log("Данные можно отправлять на сервер");
        }
      })