import React, { useState } from "react";
import Product from "./Product";


function ProductList(props) {
  const [productList, setProductList] = useState([
    {
      name: "Shan Garlic",
      price: "700",
      quantity: 1,
    },
    {
      name: "Tang Mango",
      price: "300",
      quantity: 1,
    },
    {
      name: "Masala Cha",
      price: "200",
      quantity: 1,
    },
  ]);
  const [userinput, setUserinput] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const [newproductList, setnewproductList] = useState([]);

  function NameChangeHandler(event) {
    setUserinput({ ...userinput, name: event.target.value });
  }
  function PriceChangeHandler(event) {
    setUserinput({ ...userinput, price: event.target.value });
  }
  function QuantityChangeHandler(event) {
    setUserinput({ ...userinput, quantity: event.target.value });
  }
 

  const increaseProductQuantity = (name) => {
    setProductList(
      productList.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseProductQuantity = (name) => {
    setProductList(
      productList.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  function RemoveProduct(index) {
    console.log(index);
    productList.splice(index, 1);
    setnewproductList([newproductList]);
  }

  function AddProduct() { 
    setProductList([...productList, userinput]);
  }

  function SaveEditProduct(name,item){
    console.log(item,name,"clicked");
    const updatedArray = productList.map((singleProduct)=>singleProduct.name === name ? item : singleProduct );
    setProductList(updatedArray);
  }


  return (
    <div className="container pt-5">
    <div>
        <div>
          <input
            type="text"
            placeholder="Product Name"
            onChange={NameChangeHandler}
          />
        </div>
        <div className="pt-2 pb-2">
          <input
            type="number"
            placeholder="Price"
            onChange={PriceChangeHandler}
          />
        </div>
        <div className="pt-2 pb-2">
          <input
            type="number"
            placeholder="Quantity"
            onChange={QuantityChangeHandler}
          />
        </div>
        <div>
          <button className="btn btn-success" onClick={AddProduct}>
            Add Product
          </button>
        </div>
      </div>
      <div>
      {productList.map((item, index) => (
        <Product
          increaseProductQuantity={increaseProductQuantity}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          RemoveProduct={() => RemoveProduct(index)}
          decreaseProductQuantity={decreaseProductQuantity}
          SaveEditProduct={SaveEditProduct}
        
        />
      ))}
    
      </div>
    </div>
  );
}

export default ProductList;
