const form = document.querySelector("form");
const groceryInput = document.querySelector("#grocery_input");
const reply = document.querySelector(".reply");
const getGroceryItemsFromLocalStorage = async () => {
  //? get grocery items from local storage
  let groceryItems = localStorage.getItem("groceryItems");
  if (!groceryItems) {
    return null;
  }
  return JSON.parse(groceryItems);
};
const saveGroceryItemToLocalStorage = async (groceryItem) => {
  //? get grocery items from local storage
  let groceryItems = await getGroceryItemsFromLocalStorage();
  if (!groceryItems) {
    groceryItems = JSON.stringify([groceryItem]);
  } else {
    groceryItems = JSON.stringify([groceryItem, ...groceryItems]);
  }

  return localStorage.setItem("groceryItems", groceryItems);
};
const submitFormHandler = async (event) => {
  event.preventDefault();
  let groceryValue = groceryInput.value;

  if (!groceryValue) {
    groceryInput.focus();
    return setError("Please provide an item");
  }
  groceryValue = { itemName: groceryValue };
  try {
    const {
      data: { groceryItem },
    } = await axios.post("/groceries", groceryValue);
    await saveGroceryItemToLocalStorage(groceryItem);
  } catch (err) {
    const response = err.response || "";
    const data = response.data || "";
    const error = data.error || err.message;
    setError(error);
  }
};

const getGroceries = async () => {
  let groceryItems = await getGroceryItemsFromLocalStorage();
  if (!groceryItems) {
    groceryItems = null;
  } else {
    groceryItems = groceryItems;
  }

  try {
    const response = await axios.post("/groceries", { groceryItems });
  } catch (error) {
    console.log(error);
  }
};
form.addEventListener("submit", submitFormHandler);

const setError = (message) => {
  reply.innerHTML = message;
  return reply.classList.add("error");
};

getGroceries();
