/*? ------------------------------------------------ */
/**              //Form Elements                     */
/*? ------------------------------------------------ */
const authForm = document.querySelector(".auth_form");
const passwordInput = document.querySelector(".password_container input");
const authUsername = document.querySelector(".auth_username_input");
const authEmailAddress = document.querySelector(".auth_email_address_input");
const authPassword = document.querySelector(".auth_password_input");
const authFormButton = document.querySelector(".auth_form .form_actions button");
/*? ------------------------------------------------ */
/**              //Functions                         */
/*? ------------------------------------------------ */
const submitFormHandler = async (event) => {
  event.preventDefault();
  //* reset error
  resetError();
  const formTypeIsLogin = authFormButton.className.includes("login");
  const formTypeIsSignUp = authFormButton.className.includes("signup");
  //* get the user data after validating form
  const userData = await validateForm(formTypeIsLogin, formTypeIsSignUp);
};
/*? ------------------------------------------------ */
/**              //Event Listeners                   */
/*? ------------------------------------------------ */
authForm.addEventListener("submit", submitFormHandler);
