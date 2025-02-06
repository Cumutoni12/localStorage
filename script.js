const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // retrieve input value

  const email = document.querySelector("#email").value;
  const name = document.querySelector("#name").value;
  const formData = {
    name: name,
    email: email,
  };
  // storing data to the local storage
  localStorage.setItem("formData", JSON.stringify(formData));
  alert("Data saved to the local storage");
  //   form.reset();
});

// getting data from the local storage
if (localStorage.getItem("formData")) {
  const storedData = JSON.parse(localStorage.getItem("formData"));
  document.querySelector("#name").value = storedData.name;
  document.querySelector("#email").value = storedData.email;
}
