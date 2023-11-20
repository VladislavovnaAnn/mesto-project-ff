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

  placesList.append(cardElement);

  return cardElement;
}

function cardAdd() {}

// @todo: Функция удаления карточки

function deleteCard(evt) {
  evt.target.parentElement.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach((cardElement) => {
  const template = createCard(cardElement.link, cardElement.name);
  cardAdd(template);
  return template;
});
