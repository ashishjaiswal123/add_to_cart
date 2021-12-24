import React from "react";

const CartItem = (props) => {
    

    // // testing(){
    // //     const promise = new Promise((resolve, reject) =>{
    // //         setTimeout(() =>{
    // //             resolve('done');
    // //         }, 5000)
    // //     })

    // //     promise.then(() =>{
    // //         this.setState({qty : 100})

    // //         console.log('state', this.state)
    // //     })
    // // }
    // increaseQuantity = () =>{
    //     // this.state.qty += 1
    //     // console.log('this',this.state)

    //     //setState form 1
    //     // this.setState({
    //     //     qty : this.state.qty +1
    //     // })

    //     //setState form 2
    //     this.setState((prevState) => {
    //         return {
    //             qty : prevState.qty +1
    //         }
    //     },() =>{
    //         console.log('this.state', this.state)
    //     })   
    // }
    // decreaseQuantity = () =>{
    //     const {qty} = this.state
    //     if(qty === 0){
    //         return 
    //     }
    //     this.setState((prevState) => {
    //         //this logic is also working
    //         // if(prevState.qty == 1 || prevState.qty == 0){
    //         //     return{
    //         //         qty : 0
    //         //     }
    //         // }
    //         return {
    //             qty : prevState.qty - 1
    //         }
    //     })
        
    // }
  
    // console.log("this.props",this.props)
    const {price,title,qty,img} = props.product;
    const {product,onIncreaseQuantity,onDecreaseQuantity,handleDeleteProduct} = props
    return(
        <div className="cart-item">
            {/* {this.props.jsx} */}

            <div className="left-block">
                <img style={styles.image} src={img} />
            </div>

            <div className="right-block">
                <div style={{fontSize: 25}}>{title}</div>
                <div style= { { color: "grey" } }>Rs {price}</div>
                <div style= { { color: "grey" } }>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img alt="increase" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png" 
                    onClick={() => onIncreaseQuantity(product)} />
                    <img alt="decrease" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                    onClick={()=> onDecreaseQuantity(product)}/>
                    <img alt="delete" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    onClick={() => handleDeleteProduct(product.id) }
                    />
                </div>
            </div>
        </div>
    )
    
}

const styles = {
 image:{
     height: 110,
     width: 110,
     borderRadius: 4,
     background: '#ccc'
 }
}

export default CartItem;