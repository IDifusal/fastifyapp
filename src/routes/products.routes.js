const productController = require("../controllers/product.controller");
const routes = [
  { url: "/products", method: "GET", handler: productController.getProducts },
  {
    url: "/products/:id",
    method: "GET",
    handler: productController.getProduct,
  },
  {
    url: "/products",
    method: "POST",
    handler: productController.createProduct,
  },
  {
    url: "/products/:id",
    method: "DELETE",
    handler: productController.deleteProdct,
  },
  {
    url: "/products/:id",
    method: "PUT",
    handler: productController.updateProduct,
  },
];

module.exports = routes;
