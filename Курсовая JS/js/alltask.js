'use strict';

// ВЫВОДИМ СПИСОК ЗАДАЧ В HTML
function allTask(){
    let storage = localStorage;
    let arrFromTasks = JSON.parse(storage.getItem('tasks'));
    if(!arrFromTasks || arrFromTasks.length == 0){
    storage.clear();
    document.getElementById('noTask').innerHTML = `<h1>Список задач пуст</h1>`;
    document.getElementById('dellete').style.cssText = "display: none";
    };
    for (let tasks of arrFromTasks){
        let divElem = document.createElement('div');
        divElem.classList.add('task');
        let h2Elem = document.createElement('h2');
        h2Elem.innerText = `${tasks.title}`;
        let pElem = document.createElement('p');
        pElem.innerText = `${tasks.description}`;
        let spanElem = document.createElement('p');
        spanElem.innerHTML = `Выполнить к: <b>${tasks.date}</b>`;
        let p2Elem = document.createElement('p');
        // p2Elem.innerText = `Дополнительные участники: ${tasks.nameuser}`;
        let section = document.getElementById('section');
        section.append(divElem);
        divElem.append(h2Elem, pElem, spanElem, p2Elem);
        

        // ВЫДЕЛЕНИЕ ЭЛЕМЕНТА

        divElem.addEventListener('click', function(){
        if(this.classList.contains('active')){
            this.classList.remove('active')
        }else{
            this.classList.add('active')
        }
        localStorage.setItem('tasks', JSON.stringify(arrFromTasks));

        // удаление  по кнопке 

        let button = document.getElementById('dellete');
        button.addEventListener('click', del.bind(this));
        function del(event){
            event.preventDefault();
            this.remove(this);

            arrFromTasks.splice(tasks, 1);
            localStorage.setItem('tasks', JSON.stringify(arrFromTasks));
        }


        });

        // СОРТИРОВКА ПО ДАТЕ

        arrFromTasks.sort(function(a,b){
            if (a.date < b.date) return -1;
            if (a.date > b.date) return 1;
            return 0;
        });
    }
}
allTask();

    
// сообщение если нет задач