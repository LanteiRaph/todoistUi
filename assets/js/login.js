window.addEventListener('load', async(e) => {
    //get the form 
    const user = extractFormData(e)
    //Login the user.
    await login(user);
})
//Login The User to the server.
const login = async(user) => {
    //Login the user.
    const userLoggedin =  await sendToServer('http://localhost:3000/login', 'POST', user)
    console.log(userLoggedin)
}