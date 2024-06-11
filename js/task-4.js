const form = document.querySelector(`form.login - form`);

form.addEventListener(`submit`, (event) => {
  event.preventDefault();

  if (email === "" || password === "") {
    return console.log("All form fields must be filled in");
  }
  console.log(`Email: ${email}, Password: ${password}`);
  form.reset();
});
