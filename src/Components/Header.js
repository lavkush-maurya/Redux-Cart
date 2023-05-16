import React from "react";

const Header = (props) => {
  console.log("Header", props.cardData);

  return (
    <>
      <div>
        <span className="cartno">
          {props.cardData.length}
        </span>
      </div>

      <div>
        <img
          className="addcart"
          src="https://w7.pngwing.com/pngs/317/428/png-transparent-shopping-cart-computer-icons-add-to-cart-button-angle-text-service.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
