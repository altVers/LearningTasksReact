import "./css/ProductItem.css"

export const ProductItem = ({ title, price, discount, imageUrl, id }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} className="product-card__img" />
      {discount ? (
        <span className="product-card__price-wrapper">
          <span className="product-card__price--discount">
            {price * (1 - discount)}₽
          </span>
          <span className="product-card__price--no-discount">{price}₽</span>
        </span>
      ) : (
        <span className="product-card__price-wrapper">
          <span className="product-card__price">{price}₽</span>
        </span>
      )}
      <h3 className="product-card__title">{title}</h3>
    </div>
  );
};
