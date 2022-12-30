import React, { useState } from 'react';

function ProductItems(props) {
    const [product, setProduct] = useState({
        name: props.name,
        price: props.price,
        quantity: props.quantity
    })
    const [edit, setEdit] = useState(false)
    function Edit() {
        setEdit(true);
    }
    function CloseBtn() {
        setEdit(false);
    }

     
    function NameChangeHandler(event){
        setProduct({...product, name: event.target.value});
    }

    function PriceChangeHandler(event){
        setProduct({...product, price: event.target.value});
    }
    function handleUpdate(){
        props.onUpdate(product)
        setEdit(false);
    }
    return (
        <div className='container pt-5 pb-5'>
            <div className='row'>
                <div className='col-3'>
                    <div>
                        <p>{props.name}</p>
                        <p>{props.price}</p>
                    </div>
                </div>
                <div className='col-2'>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-danger">-</button>
                        <button type="button" className="btn btn-warning">0</button>
                        <button type="button" className="btn btn-success">+</button>
                    </div>
                </div>
                <div className='col-2'>
                    <p>{props.quantity}</p>
                </div>
                <div className='col-2'>
                    <button type="button" className="btn btn-danger" onClick={props.RemoveProduct}>Remove</button>
                </div>
                <div className='col-2'>
                    <button type="button" className="btn btn-success" onClick={Edit}>Edit</button>
                </div>
                <div className='d-flex justify-content-center'>
                    {
                        edit ? <div>
                            <div class="mb-3">
                                <input type="text" className="form-control" placeholder='Name' value={product.name} onChange={NameChangeHandler} />
                            </div>
                            <div class="mb-3">
                                <input type="number" className="form-control" placeholder='Price' value={product.price}  onChange={PriceChangeHandler} />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
                            <button className="btn btn-success" onClick={CloseBtn}>Close</button>
                        </div> : ""
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductItems;