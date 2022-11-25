//Sign up for the user.
window.addEventListener('load', async () => {
    //Get the form and add event lisneer to it
    const form = document.querySelector('form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        //Get the form element
        const form = e.target
        //Get all the inputs of the form.
        const inputs = form.querySelectorAll('input')
        //Create a new user
        const user = {}
        //Add data to the user.
        inputs.forEach((input) => {
            user[input.name] = input.value
        })
        //Extract the data out of the form
        await signUp(user)
    });
    //Get the login button and add onclick listener
    const loginBtn = document.getElementById('login')
    loginBtn.addEventListener('click', () => {
        //Redirect to the sign page.
        window.location = '/frontend/login.html'
    })
})

const signUp =  async (user) => {
   //Ready up the new user.
    const response = await fetch('http://localhost:3000/signUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(user)
    })

    //Await the response
    const results = await response.json()
    console.log(results)
}