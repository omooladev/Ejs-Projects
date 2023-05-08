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

const sendRequest = async ({ method = "GET", uri, userData = null }) => {
  console.log(uri, userData);
};

const validateForm = async (formTypeIsLogin, formTypeIsSignUp) => {
  let authUsernameValue;
  let authEmailAddressValue;
  let authPasswordValue = authPassword.value;
  try {
    if (formTypeIsLogin) {
      authUsernameValue = authUsername.value;
      if (!authUsernameValue && !authPasswordValue) {
        throw new Error("Please provide your credentials");
      }
      if (!authUsernameValue) {
        authUsername.focus();
        throw new Error("Please provide your username");
      }
      if (authUsernameValue && authPasswordValue) {
        const response = await sendRequest({
          method: "POST",
          uri: "/auth/login",
          userData: { username: authUsernameValue, password: authPasswordValue },
        });
        return;
      }
    }
    if (formTypeIsSignUp) {
      authEmailAddressValue = authEmailAddress.value;
      if (!authEmailAddressValue && !authPasswordValue) {
        throw new Error("Please provide your email address and password");
      }
      if (!authEmailAddressValue) {
        authEmailAddress.focus();
        throw new Error("Please provide your email address");
      }
      if (authEmailAddressValue && authPasswordValue) {
        const response = await sendRequest({
          method: "POST",
          uri: "/auth/signup",
          userData: { emailAddress: authEmailAddressValue, password: authPasswordValue },
        });
        return;
      }
    }
    if (!authPasswordValue) {
      authPassword.focus();
      throw new Error("Please provide your password");
    }
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
