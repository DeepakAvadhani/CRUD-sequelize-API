const Product = require("../models/product.model.js");

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const setProducts = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Product.update(req.body, {
      where: { id: id }
    });
    if (!updated) {
      return res.status(404).send("Product not found");
    }
    const updatedProduct = await Product.findByPk(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.destroy({
      where: { id: id }
    });
    if (!deleted) {
      return res.status(404).send("Product not found");
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getProducts,
  getProduct,
  setProducts,
  updateProduct,
  deleteProduct
};
