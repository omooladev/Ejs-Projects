const EyeContainer = document.querySelector(".eye_container");
const passwordInput = document.querySelector(".password_container input");
console.log(passwordInput);

EyeContainer.addEventListener("click", () => {
  EyeContainer.classList.toggle("show");
  if (EyeContainer.className.includes("show")) return (passwordInput.type = "text");
  return (passwordInput.type = "password");
});
