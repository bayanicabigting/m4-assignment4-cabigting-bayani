var form = document.querySelector('form');

form.onsubmit = function(e) {
    var ul = document.getElementById('todo-list');
    var li = document.createElement('li');
    var input = document.querySelector('input');
    if (input.value.trim() == '' ||
        input.value.trim() == null ||
        input.value.trim() == "undefinied") {
        return false;
    };
    var todoButton = document.createElement('button');
    var todoText = document.createTextNode(input.value);
    todoButton.classList.add('click');
    todoButton.appendChild(todoText);
        todoButton.onclick = function() {
            todoButton.style.textDecoration = 'line-through';
        }
    li.appendChild(todoButton);
    ul.appendChild(li);
    form.reset();
    e.preventDefault();
    todoButton.ondblclick = function() {
    todoButton.parentElement.remove()
        return;
    };
}