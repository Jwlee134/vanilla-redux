import { createStore } from "redux";

const plus = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {
  if (action.type === "Add") {
    return count + 1;
  } else if (action.type === "Minus") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

plus.addEventListener("click", () => countStore.dispatch({ type: "Add" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "Minus" }));
