import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "./CheckOutProduct.css";
import { useStateValue } from "../StateProvider/StateProvider";

function CheckOutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const RemoveFromBasket = () => {
    // REMOVE ITEMS FROM BASKET
  
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const Numberss = () => {
    const stars = 5 - rating;
    return Array(stars)
      .fill()
      .map(() => <StarBorderIcon />);
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProuduct__info">
        <p className="checkoutProuduct__title">{title}</p>
        <p className="checkoutProuduct__price">
          <strong>
            <small>$</small>
          </strong>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <StarIcon />
            ))}
          <Numberss />
        </div>
        <button onClick={RemoveFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
