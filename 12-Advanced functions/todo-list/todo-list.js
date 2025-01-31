const todoList = [{
    name: 'make dinner',
    dueDate: '24-11-2024'
}, {
    name: 'wash dishes',
    dueDate: '24-11-2024'
}];

renderTodoList()

function renderTodoList() {
    let todoListHTML = '';

 
    todoList.forEach(function(todoObject, index) {
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-button" onclick="
                todoList.splice(${index}, 1);
                renderTodoList();
            ">Delete</button>
        `;
        todoListHTML += html;
    });


    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        //name: name,
        //dueDate: dueDate,
        name,
        dueDate
    });

    inputElement.value = '';

    renderTodoList();
}