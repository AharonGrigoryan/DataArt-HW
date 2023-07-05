const mysql2 = require("mysql2");
require("dotenv").config();

// Create a connection to the MySQL database
const connection = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DBNAME,
});

// Establish the connection
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Connected to the database");

  // SQL statement to create the "products" table
  const createTableQuery = `
    CREATE TABLE productsFirst (
      product_id INT,
      product_name VARCHAR(255),
      price DECIMAL(10, 2),
      quantity INT
    )
  `;

  // Execute the create table query
  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.error("Error creating table: ", err);
      connection.end();
      return;
    }
    console.log("Table created successfully");

    // SQL statement to insert data into the "products" table
    const insertDataQuery = `
      INSERT INTO products (product_id, product_name, price, quantity)
      VALUES
        (1, 'Laptop', 800.00, 10),
        (2, 'Smartphone', 500.00, 5),
        (3, 'Tablet', 400.00, 15),
        (4, 'Headphones', 100.00, 8),
        (5, 'Camera', 700.00, 3)
    `;

    // Execute the insert data query
    connection.query(insertDataQuery, (err, results) => {
      if (err) {
        console.error("Error inserting data: ", err);
      } else {
        console.log("Data inserted successfully");
      }

      // Close the database connection
      connection.end();
    });
  });
});
