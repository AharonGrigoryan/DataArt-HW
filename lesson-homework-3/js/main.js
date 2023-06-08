const container = document.querySelector(".justify-content");
const alignContainer = document.querySelector(".align-items");

function addButtonClickListener(buttons, targetContainer, logMessagePrefix) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const contentValue = button.textContent;
      targetContainer.classList.value === "align-items"
        ? (targetContainer.style.alignItems = contentValue)
        : (targetContainer.style.justifyContent = contentValue);
    });
  });
}

const buttons = document.querySelectorAll(".buttongroup button");
addButtonClickListener(buttons, container, "Button");

const secondButtons = document.querySelectorAll(".buttongroup-second button");
addButtonClickListener(secondButtons, alignContainer, "Second button");
