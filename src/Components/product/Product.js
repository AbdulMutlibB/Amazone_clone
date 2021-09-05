import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
function Product({ image, id, title, rating, price }) {
  const Numberss = () => {
    const stars = 5 - rating;
    return Array(stars)
      .fill()
      .map(() => <StarBorderIcon />);
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title"> {title} </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <StarIcon />
            ))}
          <Numberss />
        </div>
      </div>
      <img src={image} alt="" />
      <button>add to basket</button>        
    </div>
  );
}

export default Product;
