//
//Window: Object
window.addEventListener('load', () => {
    //Get the sigin up buttom and add onclieck listener
    const signUpBtn = document.getElementById('signUp');
    signUpBtn.addEventListener('click', () => {
        //Redirect to the sign page.
        window.location = '/frontend/signup.html'
    })
    //Get the login button and add onclick listener
    const loginBtn = document.getElementById('login')
    loginBtn.addEventListener('click', () => {
        //Redirect to the sign page.
        window.location = '/frontend/login.html'
    })
});
