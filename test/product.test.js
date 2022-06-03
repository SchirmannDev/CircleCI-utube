import Product from "../src/model/product";
import sellProduct from "../src/service/sellProduct";

test("deve valiodar baixa de estoque na venda de uma unidade", () => {
  let produto = new Product("Celular", 500.0, 900.0, 10);

  sellProduct(produto, 1);
  expect(produto.quantity).toBe(9);
});

test("deve aceitar venda de mais que uma unidade", () => {
  let produto = new Product("Celular", 500.0, 900.0, 10);

  sellProduct(produto, 3);
  expect(produto.quantity).toBe(6);
});
