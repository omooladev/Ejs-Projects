const form = document.querySelector("form");
const groceryInput = document.querySelector("#grocery_input");
const reply = document.querySelector(".reply");
const submitFormHandler = async (event) => {
  event.preventDefault();
  let groceryValue = groceryInput.value;

  if (!groceryValue) {
    groceryInput.focus();
    return setError("Please provide an item");
  }
  groceryValue = { itemName: groceryValue };
  try {
    const response = await axios.post("/groceries", groceryValue);
  } catch (err) {
    const response = err.response || "";
    const data = response.data || "";
    const error = data.error || err.message;
    setError(error);
  }
};
form.addEventListener("submit", submitFormHandler);

const setError = (message) => {
  reply.innerHTML = message;
  return reply.classList.add("error");
};
