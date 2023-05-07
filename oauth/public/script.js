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
  let authUsernameValue;
  let authEmailAddressValue;
  let authPasswordValue = authPassword.value;
  let checkGlobal;
  try {
    if (formTypeIsLogin) {
      authUsernameValue = authUsername.value;
      if (!authUsernameValue && !authPasswordValue)
        throw new Error("Please provide your credentials");
      if (!authUsernameValue) throw new Error("Please provide your username");
    }
    if (formTypeIsSignUp) {
      authEmailAddressValue = authEmailAddress.value;
      if (!authEmailAddressValue && !authPasswordValue)
        throw new Error("Please provide your credentials");
      if (!authEmailAddressValue) throw new Error("Please provide your email address");
    }
    if (!authPasswordValue) throw new Error("Please provide your password");
    if (checkGlobal) console.log(formTypeIsLogin, formTypeIsSignUp);
  } catch (error) {
    authReply.innerHTML = error.message;
    authReply.classList.add("error");
  }
};
const resetError = () => {
  authReply.innerHTML = "This is the reply";
  authReply.classList.remove("error");
};
const submitFormHandler = async (event) => {
  event.preventDefault();
  //* reset error
  resetError();
  const formTypeIsLogin = authFormButton.className.includes("login");
  const formTypeIsSignUp = authFormButton.className.includes("signup");
  //* get the user data after validating form
  const userData = await validateForm(formTypeIsLogin, formTypeIsSignUp);
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
