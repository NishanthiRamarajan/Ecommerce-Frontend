import React from "react";
import CartLogo from "../Card/CartLogo"; 


const Button = ({ num, click }) => {
  return (
    <div className="ui-change-btn" onClick={() => click(true)}>
      <CartLogo num={num} />
      <span>
         <div style={{marginLeft:'445px',marginTop:'-28px',fontSize: '20px',color:'#b91c1c',textShadow:'1px 1px 2px crimson, 0 0 2px white, 0 0 4px white',
        }}>{num}</div> 
      </span>
    </div>
  );
};

export default Button;
