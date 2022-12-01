//Add a load event lisner to the window
window.addEventListener('load', async () => {
    //Get the current user
    const {_id} = getCurrentUser()
    //Fetch the todos of the current user.
    const todos = await sendToServer(`http://localhost:3000/todos/${_id}`, 'GET')
    //Paint the page with the list of todos.
    paint(todos)
    //Get the form element for the new Todo
    extractFormData((formData) => {
        //Save the new todo
        saveNewTodo(formData)
    })
})

//Create a list of all the todos and display to the todods section.
const paint = (todos) => {
    //Get the parant element to attach to.
    const parent = document.getElementById('todoList')
    //Create a list of all the todos for the current user.
    //Create a list element
    const orderList = document.createElement('ul')
    //For each todo create a record
    for(let i =0; i < todos.length; i++){
        //Get the ith todo
        const todo = todos[i];
        console.log(todo)
        //Create a list record for the todo.
        const span = customeCreateElement('span', todo.description)
        const list = customeCreateElement('li', span);
        //add the edit and delete button.
        const editBtn = customeCreateElement('button', 'Completed', 'click', async () =>{
            //Update the todo as completed
            const updated = await sendToServer(`http://localhost:3000/updateTodo/${todo._id}`, 'PUT', {
                completed:true
            })
        })
        const deleteBtn = customeCreateElement('button', 'Delete', 'click', async ()=>{
            //Delete the todo
            const deleted = await sendToServer(`http://localhost:3000/deleteTodo/${todo._id}`, 'DELETE')
        })  
        //Append the li to the list
        list.appendChild(editBtn)
        list.appendChild(deleteBtn)
        orderList.appendChild(list)
    }
    parent.appendChild(orderList)
}
//Save a new todo on the server.
const saveNewTodo = async (newTodo) => {
    //Descructrire the usr Object to obtain the userId
    const {_id} = getCurrentUser() 
    //Save the new todo toht db
    //UserId, The Todo 
    const newTodo_ = {
        description: newTodo.todo,
        userId: _id
    } 
    const response = await sendToServer('http://localhost:3000/addTodo', 'POST', newTodo_)
    //Refresh the list of todos.
}
// //Edits the current todos description 
// const editTodo = (selectedTodo, recordList)  => {
//     //Create a input elment
//     const input = document.createElement('input')
//     //Set the input value to the selected todo descrption
//     input.value = selectedTodo.description
//     //Change the innertExt conttent of he click list.
//     const span = recordList.querySelector('span')
//     span.textContent = ''
//     span.appendChild(input)
// }
