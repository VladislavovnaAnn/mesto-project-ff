import "./cards";
import { initialCards } from "./cards";
import "../pages/index.css";

// @todo: Темплейт карточки
const placesList = document.querySelector(".places__list");
// @todo: DOM узлы

// @todo: Функция создания карточки

function createCard(link, name) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  const cardImg = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardTitle.textContent = name;
  cardImg.src = link;
  cardImg.alt = name;

  cardDeleteButton.addEventListener("click", deleteCard);

  return cardElement;
}

function addCard(cardElement) {
  placesList.append(cardElement);
}

// @todo: Функция удаления карточки

const deleteCard = (evt) => {
  const listItem = evt.target.closest(".card");
  listItem.remove();
};

// @todo: Вывести карточки на страницу

initialCards.forEach(({ link, name }) => {
  const template = createCard(link, name);
  addCard(template);
});
