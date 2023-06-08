const form = document.getElementById("myForm");
const dataTableBody = document.getElementById("dataTableBody");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const country = form.country.value;
  const gender = form.gender.value;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${country}</td>
        <td>${gender}</td>
      `;

  dataTableBody.appendChild(newRow);

  form.reset();
});
