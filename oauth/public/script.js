
const passwordInput = document.querySelector(".password_container input");
const authReply = document.querySelector(".reply");

//? ------------------------------------------------- //


const authUsername = document.querySelector(".auth_username_input");
const authEmailAddress = document.querySelector(".auth_email_address_input");
const authPassword = document.querySelector(".auth_password_input");
const authFormButton = document.querySelector(".auth_form .form_actions button");

const submitFormHandler = async (event) => {
  console.log(authFormButton.className);
};
authFormButton.addEventListener("click", submitFormHandler);

EyeContainer.addEventListener("click", () => {
  EyeContainer.classList.toggle("show");
  if (EyeContainer.className.includes("show")) return (passwordInput.type = "text");
  return (passwordInput.type = "password");
});
