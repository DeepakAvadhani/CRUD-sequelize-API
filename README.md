# Product CRUD API

This project is a simple CRUD (Create, Read, Update, Delete) API for managing products, built with Node.js, Express, and Sequelize ORM for MySQL.

## Installation

1. **Clone the Repository**

   ```sh
   git clone https://github.com/yourusername/product-crud-api.git
   cd product-crud-api

2. **Install Dependencies**
   ```sh
npm install
npm install -g sequelize-cli

3. **Edit Sequelize Configuration**
   Create a database in the laragon mysql
   Replace the database name with your mysql database name.

4. **Database Migrations**
   Migrate the database
   ```sh
   npx sequelize-cli init
   npx sequelize-cli migration:generate --name create-products-table
   npx sequelize-cli db:migrate
5. **Run the Index file**
   ```sh
    node index.js

6. **Verify Functionality**
   * Use a tool like Postman or cURL to test your API endpoints. For example:
     * GET http://localhost:3001/api/products to get a list of products.
     * POST http://localhost:3001/api/products to create a new product.
     * GET http://localhost:3001/api/products/:id to get a specific product.
     * PUT http://localhost:3001/api/products/update/:id to update a product.
     * DELETE http://localhost:3001/api/products/delete/:id to delete a product.



   
