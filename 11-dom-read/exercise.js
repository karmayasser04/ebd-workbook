
/**
 * The text of the page's main heading.
 */
export function pageHeading() {
  return document.querySelector("h1").textContent;
}

/**
 * How many product cards are on the page.
 */
export function productCount() {
  return document.querySelectorAll(".card").length;
}

/**
 * The name in every card, in the order they appear.
 */
export function productNames() {
  const cards = Array.from(document.querySelectorAll(".card"));

  return cards.map((card) => card.querySelector("h3").textContent);
}

/**
 * The price text shown on the card with that name.
 */
export function priceOf(name) {
  const cards = Array.from(document.querySelectorAll(".card"));

  const card = cards.find(
    (card) => card.querySelector("h3").textContent === name
  );

  if (!card) {
    return null;
  }

  return card.querySelector(".price").textContent;
}

/**
 * Names of products whose cards have the class "sold-out".
 */
export function soldOutNames() {
  const soldOutCards = Array.from(
    document.querySelectorAll(".card")
  ).filter((card) => card.classList.contains("sold-out"));

  return soldOutCards.map((card) => card.querySelector("h3").textContent);
}
