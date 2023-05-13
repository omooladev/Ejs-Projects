/*? ------------------------------------------------ */
/**              //Form Elements                     */
/*? ------------------------------------------------ */
const eyeContainer = document.querySelector(".eye_container");
const authReply = document.querySelector(".reply");
const passwordInput = document.querySelector(".password_container input");
/*? ------------------------------------------------ */
/**              //Functions                         */
/*? ------------------------------------------------ */

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
