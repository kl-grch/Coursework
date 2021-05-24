'use strict';

// СОБИРАЕМ ДАННЫЕ В ОБЪЕКТ И СОХРАНЯЕМ В ЛОКАЛЬНОЕ ХРАНИЛИЩЕ

let form = document.forms.form;
form.addEventListener("submit", addTask);

function addTask(event){
    event.preventDefault();
    let title = form.elements.title.value;
    let description = form.elements.description.value;
    let date = form.elements.date.value;
    let currentDate = new Date();
    let taskDate = new Date(date);
    if (taskDate.getTime() < currentDate.getTime()){
      return false;
    };
    let taskObj = {};
    taskObj["title"] = title;
    taskObj["description"] = description;
    taskObj["date"] = date;
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

let dateRules = {
  elem: taskForm.elements.datetask,
  errorField: document.getElementById("date-error")
};

let validator = {
  checkMinLen(rule){
      if ((rule.elem.value.length > rule.maxLength) || (rule.elem.value.length < rule.minLength)){
          rule.errorField.innerText =
              "Значение должно быть в диапазоне от 1 до 20 симовлов";
          return false;
      }
      if (rule.elem.value.length < rule.minLength){
        return false;
      }
      rule.errorField.innerText = "";
      return true;
  },
  checkDate(rule){
    if (!rule.elem.value){
      rule.errorField.innerText = "Дата не может быть пустой и меньше текущей";
      return false;
    }
    rule.errorField.innerText = "+";
    return true;
  }

};

taskForm.elements.nametask
    .addEventListener("keyup", validator.checkMinLen.bind(null, nameRules));
taskForm.elements.datetask
    .addEventListener("keyup", validator.checkDate.bind(null, dateRules));


    taskForm.addEventListener("submit", (event)=>{
      event.preventDefault();
      if (!validator.checkMinLen(nameRules) && !validator.checkDate(dateRules)) {
        return false;
      }else if (!validator.checkMinLen(nameRules)) {
        return false;
      }else if (!validator.checkDate(dateRules)){
        return false;
      }else{
        document.getElementById('submit').innerText = "Задача была успешно добавлена";
        return true;
        }
      });
