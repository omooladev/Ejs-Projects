const form = document.querySelector("form");
const groceryInput = document.querySelector("#grocery_input");
const reply = document.querySelector(".reply");
const submitFormHandler = async (event) => {
  event.preventDefault();
  const groceryValue = groceryInput.value;
  if (!groceryValue) {
    groceryInput.focus();
    reply.innerHTML = "Please provide an item";
    return reply.classList.add("error");
  }
  await fetch("/", { method: "POST", body: { groceryValue } });
};
form.addEventListener("submit", submitFormHandler);
