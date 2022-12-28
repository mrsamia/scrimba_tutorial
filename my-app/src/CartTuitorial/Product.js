import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Product(props) {
    const [productQuantity, setproductQuantity] = useState(1);

  function AddQuantity() {
    props.increaseProductQuantity(props.name);
    setproductQuantity(productQuantity + 1);
  }
  function RemoveQuantity() {
    setproductQuantity(
      productQuantity <= 1 ? productQuantity : productQuantity - 1
    );
  }

  
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-3">
          <p>{props.name}</p>
          <p>{props.price}</p>
        </div>
        <div className="col-3">
          <ButtonGroup size="sm">
            <Button onClick={RemoveQuantity}>-</Button>
            <Button>{productQuantity}</Button>
            <Button onClick={AddQuantity}>+</Button>
          </ButtonGroup>
        </div>
        <div className="col-3">
          <p>{props.price*props.quantity}</p>
        </div>
        <div className="col-3">
          <button className="btn btn-danger" onClick={props.RemoveProduct}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
