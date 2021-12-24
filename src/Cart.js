import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
    
    const {products} = props
    return(
        <div className="cart">
            {products.map((product) =>{
                return (
                <CartItem 
                product={product} 
                key={product.id}
            //    func ={()=> console.log("helooo")}
            //    jsx={<h1>Test</h1>}
                onIncreaseQuantity={props.onIncreaseQuantity}
                onDecreaseQuantity={props.onDecreaseQuantity}
                handleDeleteProduct={props.handleDeleteProduct}
                />)
            })}
        </div>
    ); 
}

export default Cart;