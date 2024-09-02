import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartLogo = ({ itemCount }) => {
  return (
    <div className="cart-logo">
      <ShoppingCartIcon  style={{ fontSize: 40, marginLeft:'404px'}}/>
      {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
    </div>
  );
};

export default CartLogo;
