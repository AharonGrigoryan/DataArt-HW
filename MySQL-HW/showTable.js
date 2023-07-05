const express = require("express");
const mysql2 = require("mysql2");
require("dotenv").config();
const app = express();

// Create a connection pool to the MySQL database
const pool = mysql2.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DBNAME,
});

// Define a route to render the products table and buttons
app.get("/", (req, res) => {
  const query = "SELECT * FROM products";
  pool.query(query, (err, results) => {
    if (err) {
      console.error("Error retrieving products: ", err);
      res.status(500).send("Error retrieving products");
    } else {
      const tableHtml = generateTableHtml(results);
      const buttonsHtml = generateButtonsHtml();
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              table {
                border-collapse: collapse;
                width: 100%;
                margin-bottom: 20px;
              }
              th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
              }
              th {
                background-color: #f2f2f2;
              }
            </style>
          </head>
          <body>
            ${tableHtml}
            ${buttonsHtml}
            <div id="result"></div>
            <script>
              const buttons = document.querySelectorAll('.operator-button');
              const resultDiv = document.getElementById('result');

              buttons.forEach((button) => {
                button.addEventListener('click', (event) => {
                  const operator = event.target.getAttribute('data-operator');
                  fetch(/operator/+ operator)
                    .then((response) => response.json())
                    .then((data) => {
                      resultDiv.innerText = JSON.stringify(data);
                    })
                    .catch((error) => {
                      console.error('Error retrieving data:', error);
                      resultDiv.innerText = 'Error retrieving data';
                    });
                });
              });
            </script>
          </body>
        </html>
      `);
    }
  });
});

// Function to generate HTML table from query results
function generateTableHtml(results) {
  let tableHtml = `
    <table>
      <thead>
        <tr>
          <th>product_id</th>
          <th>product_name</th>
          <th>price</th>
          <th>quantity</th>
        </tr>
      </thead>
      <tbody>
  `;

  results.forEach((product) => {
    tableHtml += `
      <tr>
        <td>${product.product_id}</td>
        <td>${product.product_name}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
      </tr>
    `;
  });

  tableHtml += `
      </tbody>
    </table>
  `;

  return tableHtml;
}

// Function to generate HTML buttons for each operator
function generateButtonsHtml() {
  const operators = [
    "Min",
    "Max",
    "And",
    "Or",
    "Not",
    "Like",
    "Between",
    "Union",
  ];
  let buttonsHtml = "";

  operators.forEach((operator) => {
    buttonsHtml += `
      <button class="operator-button" data-operator="${operator}">${operator}</button>
    `;
  });

  return buttonsHtml;
}

// Route for each operator
app.get("/operator/:operator", (req, res) => {
  const operator = req.params.operator;
  let query = "";

  switch (operator) {
    case "Min":
      query = "SELECT MIN(price) AS min_price FROM products";
      break;
    case "Max":
      query = "SELECT MAX(price) AS max_price FROM products";
      break;
    case "And":
      query = "SELECT * FROM products WHERE price > 200 AND quantity > 3";
      break;
    case "Or":
      query = "SELECT * FROM products WHERE price < 500 OR quantity > 10";
      break;
    case "Not":
      query = "SELECT * FROM products WHERE NOT (price < 500)";
      break;
    case "Like":
      query = 'SELECT * FROM products WHERE product_name LIKE "%head%"';
      break;
    case "Between":
      query = "SELECT * FROM products WHERE price BETWEEN 100 AND 500";
      break;
    case "Union":
      query = "SELECT * FROM products UNION SELECT * FROM products";
      break;
    default:
      res.status(400).send("Invalid operator");
      return;
  }

  pool.query(query, (err, results) => {
    if (err) {
      console.error(`Error executing ${operator} query: `, err);
      res.status(500).send(`Error executing ${operator} query`);
    } else {
      const resultsString = JSON.stringify(results, null, 2);
      console.info(`${operator}:`, resultsString);

      res.send(resultsString);
    }
  });
});

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
