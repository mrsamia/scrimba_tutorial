import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Product(props) {
    const [productQuantity, setproductQuantity] = useState(1);
    const [Edit, setEdit] = useState(false);
    function EditHandler(){
      setEdit(true)
    }
    function CloseBtn(){
      setEdit(false)
    }
  const [EditValue, setEditValue] = useState({name:props.name,price:props.price,quantity:props.quantity});
  function EditName(event){
    setEditValue({...EditValue,name:event.target.value})
  }
  function EditPrice(event){
    setEditValue({...EditValue,price:event.target.value})
  }
  function EditQuantity(event){
    setEditValue({...EditValue,quantity:event.target.value})
  }

  function AddQuantity() {
    props.increaseProductQuantity(props.name);
    setproductQuantity(productQuantity + 1);
  }
  function RemoveQuantity() {
    props.decreaseProductQuantity(props.name)
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
        <div className="col-2">
          <ButtonGroup size="sm">
            <Button onClick={RemoveQuantity}>-</Button>
            <Button>{productQuantity}</Button>
            <Button onClick={AddQuantity}>+</Button>
          </ButtonGroup>
        </div>
        <div className="col-2">
          <p>{props.price*props.quantity}</p>
        </div>
        <div className="col-2">
          <button className="btn btn-danger"onClick={props.RemoveProduct}>Remove</button>
        </div>
        <div className="col-2">
          <button className="btn btn-success" onClick={EditHandler}>Edit</button>
        </div>
      </div>

    <div>
    {Edit?
      <div>
        <div>
          <input
            type="text"
            placeholder="Product Name"
            value={EditValue.name}
            onChange={EditName}
          />
        </div>
        <div className="pt-2 pb-2">
          <input
            type="number"
            placeholder="Price"
            onChange={EditPrice}
            value={EditValue.price}
          />
        </div>
        <div className="pt-2 pb-2">
          <input
            type="number"
            placeholder="Quantity"
            onChange={EditQuantity}
            value={EditValue.quantity}
          />
        </div>
        <div className="d-flex justify-content-center">
        <div className="me-3">
        <button className="btn btn-success" onClick={()=>props.SaveEditProduct(props.name,EditValue)}>
          Saved Edit Product 
          </button>
        </div>
          <div>
          <button className="btn btn-secondary text-white" onClick={CloseBtn}>
          Close 
          </button>
          </div>
        </div>
      </div>
    :""}
    </div>
    </div>
  );
}

export default Product;
