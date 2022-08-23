import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async (e) => {
    // on submit, create a todo, reset the form, and display the todos
    e.preventDefault();

    const formData = new FormData(todoForm);
    const todo = formData.get('todo');

    const response = await createTodo(todo);
    console.log(response);

    todoForm.reset();

    const error = response.error;

    if (error) {
        console.log(error.message);
    } else {
        displayTodos();
    }
});

// create todo state

// add async complete todo handler function
    // call completeTodo
    // swap out todo in array
    // call displayTodos
   

async function displayTodos() {
    // clear the container (.innerHTML = '')
    todosEl.innerHTML = '';
    // display the list of todos, 
    const todos = await getTodos();
    for (let todo of todos) {
        // call render function, pass in state and complete handler function!
        const renderedTodo = renderTodo(todo);
        // append to .todos
        todosEl.append(renderedTodo);
    }
   
}

// add page load function


async function loadData() {
    // fetch the todos and store in state
    // call displayTodos
    displayTodos();
}

loadData();

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async () => {
    // delete all todos
    // modify state to match
    // re displayTodos
});
