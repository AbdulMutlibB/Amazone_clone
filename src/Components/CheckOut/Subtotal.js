import React from "react";
import './Subtotal.css'
import {useStateValue} from '../StateProvider/StateProvider'
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../StateProvider/Reducer";

function Subtotal() {

    const [{basket},dispatch] = useStateValue()
 
return (
    <div className="subtotal">
        <CurrencyFormat
        renderText={(value)=>(
            <>
            <p className="subtotal__info">
                Subtotal({basket.length} items):<strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" />This order contain a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />
      <button>proceed to check out</button>
    </div>
  );
}
export default Subtotal;
