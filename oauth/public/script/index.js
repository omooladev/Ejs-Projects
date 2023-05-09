/*? ------------------------------------------------ */
/**              //Form Elements                     */
/*? ------------------------------------------------ */
const eyeContainer = document.querySelector(".eye_container");
const authReply = document.querySelector(".reply");

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

const toggleEyeContainerHandler = () => {
  eyeContainer.classList.toggle("show");
  if (eyeContainer.className.includes("show")) return (passwordInput.type = "text");
  return (passwordInput.type = "password");
};
/*? ------------------------------------------------ */
/**              //Event Listeners                   */
/*? ------------------------------------------------ */

eyeContainer.addEventListener("click", toggleEyeContainerHandler);
