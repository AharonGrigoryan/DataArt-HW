import myExport from "../data/data.mjs";

const pictures = ["img/nature-1.jpg", "img/nature-2.jpg"];

function createCard(card, picture) {
  const cardContainer = document.getElementById("cardContainer");

  const colDiv = document.createElement("div");
  colDiv.classList.add("col");

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "shadow-sm");

  const img = document.createElement("img");
  img.classList.add("bd-placeholder-img", "card-img-top");
  img.src = picture;
  img.alt = "alt";

  const cardBodyDiv = document.createElement("div");
  cardBodyDiv.classList.add("card-body");

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = card.cardText;

  const btnGroupDiv = document.createElement("div");
  btnGroupDiv.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  const btnGroup = document.createElement("div");
  btnGroup.classList.add("btn-group");

  const btn1 = document.createElement("button");
  btn1.type = "button";
  btn1.classList.add("btn", "btn-sm", "btn-outline-secondary");
  btn1.dataset.target = card.btn1DataTarget;
  btn1.textContent = card.btn1Text;

  const btn2 = document.createElement("button");
  btn2.type = "button";
  btn2.classList.add("btn", "btn-sm", "btn-outline-secondary");
  btn2.dataset.target = card.btn2DataTarget;
  btn2.textContent = card.btn2Text;

  const small = document.createElement("small");
  small.classList.add("text-body-secondary");
  small.textContent = card.time;

  btnGroup.appendChild(btn1);
  btnGroup.appendChild(btn2);
  btnGroupDiv.appendChild(btnGroup);
  btnGroupDiv.appendChild(small);
  cardBodyDiv.appendChild(cardText);
  cardBodyDiv.appendChild(btnGroupDiv);
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBodyDiv);
  colDiv.appendChild(cardDiv);
  cardContainer.appendChild(colDiv);
}

myExport.cardData.forEach((card, index) => {
  const pictureIndex = index % pictures.length;
  const picture = pictures[pictureIndex];
  createCard(card, picture);
});
