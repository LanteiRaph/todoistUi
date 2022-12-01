//This file handle s all shared logic, each apps will have is own logic but supported by this file.
function extractFormData(callback) {
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
    //Use the callback method to pass the user back.
    callback(user)
  });
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

//Return the current looged in user. 
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
}

//Create an element with it inner tack and an event if any.
const customeCreateElement = (el, text, event = null, callback=null) => {
  //Create the llement
  const element = document.createElement(el)
  console.log(typeof text)
  if(typeof text === 'string'){
    const p = document.createElement('p')
    p.textContent = text
    text = p
  } 
  //set the inner text
  element.appendChild(text)
  //Check if event has been provided if not dont if so...
  if(event == null) return element
  //add event lisener
  element.addEventListener(event, callback)
  return element
}
