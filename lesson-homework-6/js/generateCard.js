import myExport from "../data/data.mjs";

const images = ["img/nature-3.jpg", "img/nature-4.jpg"];

function generateCard(cardData, imageIndex) {
  // Generate the HTML structure for a single card
  const imageAlignment = imageIndex === 0 ? "order-md-2" : "order-md-1";
  const cardHTML = `
   <hr class="featurette-divider mt-5 mb-5" />
    <div class="row featurette">
      <div class="col-md-7 ${imageAlignment}">
        <h2 class="featurette-heading fw-normal lh-1">
          ${cardData.heading}
          <span class="text-body-secondary">${cardData.subheading}</span>
        </h2>
        <p class="lead">
          ${cardData.content}
        </p>
      </div>
      <div class="col-md-5 ${
        imageAlignment === "order-md-1" ? "order-md-2" : "order-md-1"
      }">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="${
          images[imageIndex]
        }" alt="500x500" />
      </div>
    </div>
  `;

  return cardHTML;
}

function renderCards() {
  const cardsContainer = document.getElementById("cardsContainer");
  let imageIndex = 0;
  // Generate HTML for each card using map
  const cardsHTML = myExport.cardsData
    .map((cardData, index) => {
      const cardHTML = generateCard(cardData, imageIndex);
      imageIndex = (imageIndex + 1) % images.length; // Cycle through the available images
      return cardHTML;
    })
    .join("");
  cardsContainer.innerHTML = cardsHTML;
}

// Call the function to render the cards
renderCards();
