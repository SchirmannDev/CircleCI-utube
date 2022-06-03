import Product from "../model/product";

export default function sellProduct(product, amount) {
  product.quantity -= 1;
  return product;
}
