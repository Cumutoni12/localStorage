const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const name = document.querySelector("#name").value;
  const formData={
    name:name , email:email
  }
  localStorage.setItem("formData",JSON.stringify(formData))
  alert("Data saved to the local storage")
  form.reset()
  
});

