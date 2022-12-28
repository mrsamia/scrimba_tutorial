import React, { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";

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
    quantity: ""
   
  });

function NameChangeHandler(event){
    setUserinput({...userinput,name:event.target.value});
}
function PriceChangeHandler(event){
    setUserinput({...userinput,price:event.target.value});
}
function QuantityChangeHandler(event){
    setUserinput({...userinput, quantity:event.target.value});
}
  const [newproductList, setnewproductList] = useState([]);
  const increaseProductQuantity = (name) => {
    setProductList(
      productList.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };



  function RemoveProduct(index) {
    console.log(index);
    productList.splice(index, 1);
    setnewproductList([newproductList]);
  }

  function AddProduct(){
    setProductList([...productList,userinput])
}

  return (
    <div className="container">
        <div>
        <div>
           <input type="text" placeholder="Product Name" onChange={NameChangeHandler}/>
           </div>
            <div className="pt-2 pb-2">
            <input type="number" placeholder="Price" onChange={PriceChangeHandler}/>
            </div>
            <div className="pt-2 pb-2">
            <input type="number" placeholder="Quantity" onChange={QuantityChangeHandler}/>
            </div>
            <div>
                <button className="btn btn-success" onClick={AddProduct}>Add Product</button>
            </div>
        </div>
      {productList.map((item, index) => (
        <Product
          increaseProductQuantity={increaseProductQuantity}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          RemoveProduct={() => RemoveProduct(index)}
        />
      ))}
    </div>
  );
}

export default ProductList;
