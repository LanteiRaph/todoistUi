window.addEventListener("load", async (e) => {
  e.preventDefault();
  //get the form
  extractFormData(async (formData) => {
    //Login the user.
    await login(formData);
  });
});
//Login The User to the server.
const login = async (user) => {
  //Login the user.
  const userLoggedin = await sendToServer(
    "http://localhost:3000/login",
    "POST",
    user
  );
  //Check if user Valid mean we have a user other its 403...
  if(!userLoggedin) return 
  //Save the retrubed user as the current looged in user....
  localStorage.setItem('user', JSON.stringify(userLoggedin))
  //Rediredt to the todos page.
  window.location = '/frontend/todos.html'
};
