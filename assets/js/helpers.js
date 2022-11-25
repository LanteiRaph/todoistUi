//This file handle s all shared logic, each apps will have is own logic but supported by this file.
function extractFormData(form) {
  //Create a new user
  const user = {};
  const form = document.querySelector("form");
  //Ad a submit event listner to the form. 
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    //Get the form element
    const form = e.target;
    //Get all the inputs of the form.
    const inputs = form.querySelectorAll("input");

    //Add data to the user.
    inputs.forEach((input) => {
      user[input.name] = input.value;
    });
  });
  return user
}

async function sendToServer(url, method, data){
    const response = await fetch(url, {
        method:method,
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
    })
    //Await the response
    return await response.json()
}
