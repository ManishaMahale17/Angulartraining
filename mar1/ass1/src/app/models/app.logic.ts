import { Product } from './app.product.model';
export class ProductLogic {
  private products: Array<Product>;

  constructor() {
    this.products = new Array<Product>();
    this.products.push(
      new Product(1, 'Prd-01', 'Laptop', 'Electronics', 'HP', 'Gaming', 123000)
    );
    this.products.push(
      new Product(2, 'Prd-02', 'Iron', 'Electrical', 'TATA', 'Home Helper', 2300)
    );
  }

  getProducts():Array<Product> {
    return this.products;
  }

  addProduct(prd:Product):Array<Product> {
    this.products.push(prd);
    return this.products;
  }
}
