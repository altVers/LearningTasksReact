import { ProductItem } from "./ProductItem";
import "./css/ProductList.css"

export function ProductList({ products }) {
  const productsList = products.map((item) => (
    <li className="products__item">
      <ProductItem
        title={item.title}
        price={item.price}
        discount={item.discount || null}
        imageUrl={item.imageUrl}
        id={item.id}
      />
    </li>
  ));

  return <ul className="products__list">{productsList}</ul>;
}
