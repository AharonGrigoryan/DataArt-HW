# Simple SQL Project

## Description

This is a simple SQL project that demonstrates the usage of different operators and functions in MySQL. It includes examples of the following:

- `MIN()` and `MAX()` Functions
- `AND`, `OR`, and `NOT` Operators
- `LIKE` Operator
- `BETWEEN` Operator
- `UNION` Operator

## Installation

1. Clone the repository: `git clone <repository_url>`
2. Install the required dependencies: `npm install`

## Usage

1. Start the server: `node app.js`
2. Open your web browser and navigate to `http://localhost:3000`

## Endpoints

- `GET /operator/min`: Retrieves the minimum value from the products table.
- `GET /operator/max`: Retrieves the maximum value from the products table.
- `GET /operator/and`: Retrieves records from the products table using the `AND` operator.
- `GET /operator/or`: Retrieves records from the products table using the `OR` operator.
- `GET /operator/not`: Retrieves records from the products table using the `NOT` operator.
- `GET /operator/like`: Retrieves records from the products table using the `LIKE` operator.
- `GET /operator/between`: Retrieves records from the products table using the `BETWEEN` operator.
- `GET /operator/union`: Retrieves records from the products table using the `UNION` operator.

## Examples

### `GET /operator/min`

- Description: Retrieves the minimum value from the products table.
- Response: The result is displayed as a JSON array.

### `GET /operator/max`

- Description: Retrieves the maximum value from the products table.
- Response: The result is displayed as a JSON array.

...
