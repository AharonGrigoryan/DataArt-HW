/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
const mysql2 = require("mysql2");
const { host, user, database, password } = require('../../config');


/**
 * Router Definition
 */
export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items
const db = mysql2.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
});

// Route: "/"
itemsRouter.get('/', (req: Request, res: Response) => {
  res.json('hello-world');
});


// Route: "/items"
itemsRouter.get('/items', (req: Request, res: Response) => {
  const q: string = 'SELECT * FROM item';
  db.query(q, (err: Error, data: any) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// Route: "/items/:id"
itemsRouter.get('/items/:id', (req: Request, res: Response) => {
  const itemId: string = req.params.id;
  const q: string = 'SELECT * FROM item WHERE id = ?';

  db.query(q, [itemId], (err: Error, data: any) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    if (data.length === 0) {
      return res.status(404).json({ error: "Item not found" });
    }
    return res.json(data[0]);
  });
});

// Route: "/items" (POST)
itemsRouter.post('/items', (req: Request, res: Response) => {
  const q: string = 'INSERT INTO item (`name`,`price`,`description`,`cover`) VALUES(?)';

  const values = [
    req.body.name,
    req.body.price,
    req.body.description,
    req.body.cover,
  ];
  console.log(values);

  db.query(q, [values], (err: Error, data: any) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// Route: "/items/:id" (DELETE)
itemsRouter.delete('/items/:id', (req: Request, res: Response) => {
  const itemId: string = req.params.id;
  const q: string = 'DELETE FROM item WHERE id = ?';

  db.query(q, [itemId], (err: Error, data: any) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// Route: "/items/:id" (PUT)
itemsRouter.put('/items/:id', (req: Request, res: Response) => {
  const itemId: string = req.params.id;
  const q = 'UPDATE item SET `name` = ?, `price` = ?, `description` = ?, `cover` = ? WHERE id = ?';

  const values = [req.body.name, req.body.price, req.body.description, req.body.cover, itemId];

  db.query(q, values, (err: Error, data: any) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});



itemsRouter.post("/api", (req, res) => {
  const localhost = req.body.localhost;

  // Retrieve items from the database based on the provided localhost
  const sql = `SELECT * FROM item WHERE localhost = ?`;
  db.query(sql, [localhost], (err, result) => {
    if (err) {
      console.error("Error retrieving items:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    if (result.length > 0) {
      console.log("Items for localhost:", result);
      res.json(result);
    } else {
      console.log("No items found for the entered localhost.");
      res.json({ message: "No items found" });
    }
  });
});

