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
  //Local Storeage....
  localStorage.setItem('user', JSON.stringify(userLoggedin))
};
