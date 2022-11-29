//Add a load event lisner to the window
window.addEventListener('load', async () => {
    //Get the current user
    const currentUser = localStorage.getItem('user')
    //Fetch the todos of the current user.
    const todos = await sendToServer(` http://localhost:3000/todos/${currentUser._id}`, 'GET')
    //Paint the page with the list of todos.
    paint(todos)
    //Get the form element for the new Todo
    extractFormData(() => {
        //Save the new todo
        saveNewTodo()
    })
})

//Create a list of all the todos and display to the todods section.
const paint = (todos) => {
    //
}
//Save a new todo on the server.
const saveNewTodo = () => {
//
console.log('Hello ready to save.')
}
