import React from "react";
import { useShopStore } from "../store/shop.store";
import Title from "./Title";

const CartTotal = () => {
  const getCartAmount = useShopStore((state) => state.getCartAmount);

  return (
    <>
      {/* This section displays the total price of the items in the cart */}

      <div className="w-full">
        <div className="text-2xl">
          <Title text1={"CART"} text2={"TOTALS"} />
        </div>

        <div className="flex flex-col gap-2 mt-2 text-sm">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>$ {getCartAmount()}.00</p>{" "}
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Shipping Fee</p>
            <p>$ 10.00</p> {/* Replace with dynamic shipping */}
          </div>
          <hr />
          <div className="flex justify-between">
            <b>Total</b>
            <b>$ {getCartAmount() === 0 ? 0 : getCartAmount() + 10.0}</b>{" "}
            {/* Replace with dynamic total */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
