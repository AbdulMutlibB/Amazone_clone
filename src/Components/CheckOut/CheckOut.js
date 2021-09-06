import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import "./CheckOut.css";
import CheckOutProduct from "./CheckOutProduct";
import Subtotal from "./Subtotal";
function CheckOut() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkOut">
      <div className="checkOut__left">
        <img
          className="checkOut__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>YOUR BASKET IS EMPTY</h2>
            <p>
              <strong>
                You have no items in your basket. To buy one or more items,
                click "Add to basket" next to the items
              </strong>
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkOut__title">YOUR SHOPPING BASKET</h2>
            {/* LIST OUT ALL OF THE CHECKOUT PRODUCTS */}
            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length >= 0 && (
        <div className="checkOut__right">
          <Subtotal/>
        </div>
      )}
    </div>
  );
}

export default CheckOut;
