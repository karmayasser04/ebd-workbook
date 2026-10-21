

import { items } from "./items.js";

export function renderItems(list) {
  const listElement = document.querySelector("#list");

  // Remove the old items before drawing the new ones
  listElement.textContent = "";

  for (const item of list) {
    const listItem = document.createElement("li");

    listItem.classList.add("entry");
    listItem.textContent = `${item.name} - ${item.price} EGP`;

    listElement.append(listItem);
  }
}

export function matching() {
  return items.filter((item) => item.inStock === false);
}

export function start() {
  // Show every product when the page starts
  renderItems(items);

  // Show only out-of-stock products when the button is clicked
  const button = document.querySelector("#apply");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}

