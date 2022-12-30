import React, { useState } from 'react';
import Product from '../CartTuitorial/Product';
import ProductItems from './ProductItems';

function Cart(props) {
    const [productItems, setProductItems] = useState([
        {
            name: "Shan Garlic",
            price: "800",
            quantity: 0
        },
        {
            name: "Tang Mango",
            price: "700",
            quantity: 0
        },
        {
            name: "Masala Cha",
            price: "100",
            quantity: 0
        }
    ])
    function RemoveProduct(index) {
        let tempProductItems = [...productItems];
        tempProductItems.splice(index, 1)
        setProductItems(tempProductItems)
    }

    function onUpdate(index, product) {
        let tempProductItems = [...productItems];
        tempProductItems[index] = product
        setProductItems(tempProductItems)
    }

    return (
        <div className='container pt-5'>
            {
                productItems.map((item, index) => (
                    <div>
                        <ProductItems name={item.name} price={item.price} quantity={item.quantity} onUpdate={(product) => onUpdate(index, product)} RemoveProduct={() => RemoveProduct(index)} />
                    </div>
                ))
            }
        </div>
    );
}

export default Cart;