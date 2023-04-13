const form = document.querySelector("form");
const groceryInput = document.querySelector("#grocery_input");
const reply = document.querySelector(".reply");
const submitFormHandler = async (event) => {
  event.preventDefault();
  let groceryValue = groceryInput.value;

  if (!groceryValue) {
    groceryInput.focus();
    reply.innerHTML = "Please provide an item";
    return reply.classList.add("error");
  }
  groceryValue = { itemName: groceryValue };

  const response = await axios.post("/", groceryValue);
  console.log(response);
};
try {
  form.addEventListener("submit", submitFormHandler);
} catch (error) {}
