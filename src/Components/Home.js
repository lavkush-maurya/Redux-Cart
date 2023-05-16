import React from "react";

const Home = (props) => {
  console.log("Home", props);

  return (
    <>

      <h1>Home Component</h1>
      <div className="container">
        <img
          className="imgclass"
          src="https://m.media-amazon.com/images/I/619f09kK7tL._SL1500_.jpg"
          alt=""
        />
        <span>Modal: iPhone 13</span>
        <span>Price : 100$</span>
        <input
          onClick={() =>
            props.addToCartHandler({ price: "1000$", modal: "iPhone13" })
          }
          className="button1"
          type="button"
          value="Add to Cart"
        />
        <input
          onClick={() =>
            props.removeToCartHandler()
          }
          className="button2"
          type="button"
          value="Remove to Cart"
        />
      </div>
    </>
  );
};

export default Home;
