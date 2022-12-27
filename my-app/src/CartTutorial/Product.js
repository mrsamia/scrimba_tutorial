import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Product(props) {
  const [productList, setProductList] = useState([
    {
      name: "Shan Garlic",
      price: "700",
      quantity: 0,
    },
    {
      name: "Tang Mango",
      price: "300",
      quantity: 0,
    },
    {
      name: "Masala Cha",
      price: "200",
      quantity: 0,
    },
  ]);
  return (
    <div className="container pt-5">
      <div className="">
        <div className="row ">
          {/* {productList.map((item) => (
            <div>
              <div className="col-3 ">
                <div className="card pt-4 pb-5">
                  <div>
                    <h5>{item.name}</h5>
                  </div>
                  <div>
                    <h5>{item.price}</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="pt-4">
                  <ButtonGroup size="sm">
                    <Button>-</Button>
                    <Button>0</Button>
                    <Button>+</Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          ))} */}
          <div className="col-3">
            {
                productList.map((item)=>(
                    <div className="card pt-4 pb-5">
                    <div>
                      <h5>{item.name}</h5>
                    </div>
                    <div>
                      <h5>{item.price}</h5>
                    </div>
                    
                  </div>
                ))
            }
          </div>
          <div className="col-3">
          <ButtonGroup size="sm">
                    <Button>-</Button>
                    <Button>0</Button>
                    <Button>+</Button>
                  </ButtonGroup>
          </div>
          <div className="col-3">
          {
                productList.map((item)=>(
                    <div className=" pt-4 pb-5">
                    <div>
                      <h5>{item.quantity}</h5>
                    </div>
                  </div>
                ))
            }
          </div>
          <div className="col-3">
            <button className="btn btn-danger">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
