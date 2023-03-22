const listItems = document.querySelector('.todo-items');
const form = document.querySelector('form');

let itemsLeft;
let itemsCompleted;

// check if there's a saved list in local storage
let todoList = [JSON.parse(localStorage.getItem('todoList'))] || [];
// let todoList = [];
// renderTodo();

// If there's a saved list, render list
// otherwise, proceed




form.addEventListener('submit', (e) => {
    e.preventDefault();

    let input = document.getElementById('list-input');
    const inputValue = input.value;

    if (!inputValue) return;

    addItemToList(inputValue);

    // Clear input value
    input.value = '';
})


function addItemToList(value) {
    const markup = `
        <input type="checkbox" name="" id="">
        <p>${value}</p>
        <button class="del-btn">&#10005;</button>
    `;

    const li = document.createElement('li');
    li.className = 'todo-input';
    li.innerHTML = markup;

    listItems.prepend(li);

    updateTodoList(li);
    // updateSummary();
}


function updateTodoList(list) {
    todoList.push(list);
    
    console.log(todoList);
    localStorage.setItem('todoList', JSON.stringify(todoList));

    console.log(todoList);
}


// Update number of list items in "items left" paragraph

function updateItemsLeft() {

}



// if list item checkbox is checked, update "completed items" paragraph
function updateItemsCompleted() {

} 



// when delete button is clicked, remove item from list 
const todoItemsContainer = document.querySelector('.todo-items');

todoItemsContainer.addEventListener('click', (e) => deleteListItem(e));

function deleteListItem(e) {
    if (!e.target.classList.contains('del-btn')) return;

    e.target.closest('.todo-input').remove();
}


// Clear Local Storage 
const clearBtn = document.querySelector('.clear-storage');
clearBtn.addEventListener('click', clearStorage)

function clearStorage() {
    localStorage.removeItem('todoList');
    console.log('cleared');
}
