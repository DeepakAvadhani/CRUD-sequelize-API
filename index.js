const express = require("express");
const { sequelize } = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productRoute);
dddd
app.get("/", (req, res) => {
  res.send("Server is Up and running!");
});

sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server started on port 3001");
  });
});
