/*? ------------------------------------------------ */
/**              //Form Elements                     */
/*? ------------------------------------------------ */
const eyeContainer = document.querySelector(".eye_container");
const passwordInput = document.querySelector(".password_container input");
const authForm = document.querySelector(".auth_form");
const authReply = document.querySelector(".reply");
const authUsername = document.querySelector(".auth_username_input");
const authEmailAddress = document.querySelector(".auth_email_address_input");
const authPassword = document.querySelector(".auth_password_input");
const authFormButton = document.querySelector(".auth_form .form_actions button");
/*? ------------------------------------------------ */
/**              //Functions                         */
/*? ------------------------------------------------ */
const validateForm = async (formTypeIsLogin, formTypeIsSignUp) => {
  if (formTypeIsLogin) {
  }
  console.log(formTypeIsLogin, formTypeIsSignUp);
};
const submitFormHandler = async (event) => {
  event.preventDefault();
  console.log(authFormButton.className);
  const formTypeIsLogin = authFormButton.className.includes("login");
  const formTypeIsSignUp = authFormButton.className.includes("signup");
  await validateForm(formTypeIsLogin, formTypeIsSignUp);
};

const toggleEyeContainerHandler = () => {
  eyeContainer.classList.toggle("show");
  if (eyeContainer.className.includes("show")) return (passwordInput.type = "text");
  return (passwordInput.type = "password");
};
/*? ------------------------------------------------ */
/**              //Event Listeners                   */
/*? ------------------------------------------------ */
authForm.addEventListener("submit", submitFormHandler);
eyeContainer.addEventListener("click", toggleEyeContainerHandler);
