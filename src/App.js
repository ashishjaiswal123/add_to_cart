import Cart from "./Cart";
import Navbar from "./NavBar";
import React from "react";
import firebase from "./firebase";

class App extends React.Component {

  constructor(){
    super()
    this.state= {
        products : [],
        loading : true
    }
    this.db = firebase.firestore();
  }


  componentDidMount(){
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot)=>{
    //     console.log(snapshot);

    //     snapshot.docs.map((doc)=>{
    //       console.log(doc.data())
    //     })
        
    //     const products = [];
    //     snapshot.forEach(doc =>{
    //       const data = doc.data()
            // data['id'] = doc.id
    //       products.push(data)
    //     })
    //     this.setState({
    //       products : products,
    //       loading: false
    //     })
    //   })

    firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot)=>{
        // console.log(snapshot);
    
        const products = [];
        snapshot.forEach(doc =>{
          const data = doc.data()
          data['id'] = doc.id
          products.push(data)
          // console.log(data)
        })

        this.setState({
          products : products,
          loading: false
        })
      })
  }

  handleIncreaseQuantity = (product) =>{
      // console.log("hey inc. the qty of ", product)
      const {products} = this.state
      const index = products.indexOf(product)

      // products[index].qty += 1

      // this.setState({
      //     products : products
      // })

      const docRef = this.db.collection('products').doc(products[index].id)
      docRef
        .update({
          qty: products[index].qty + 1
        })
        .then(() => {
          console.log("document updated successfully")
        })
        .catch((err)=>{
          console.log("error : ". err)
        })
  }
  handleDecreaseQuantity = (product) =>{
      // console.log("hey inc. the qty of ", product)

      const {products} = this.state
      const index = products.indexOf(product)
      
      if(products[index].qty === 0){
          return
      }

      // products[index].qty -= 1

      // this.setState({
      //     products : products
      // })

      const docRef = this.db.collection('products').doc(products[index].id)
      docRef
        .update({
          qty: products[index].qty - 1
        })
        .then(() => {
          console.log("document updated successfully")
        })
        .catch((err)=>{
          console.log("error : ". err)
        })
  }
  handleDeleteProduct = (id) =>{
      const {products} = this.state
      // const items = products.filter((item) => item.id !== id)

      // this.setState ({
      //     products : items
      // })

      const docRef = this.db.collection('products').doc(id)
      docRef
        .delete()
        .then(()=>{
          console.log("deleted successfully")
        })
        .catch((err)=>{
          console.log("error : ".err)
        })
  }
  getCartCount = ()=> {
    const {products} = this.state

    let count = 0

    products.forEach((product)=>{
      count += product.qty
    })

    return count
  }
  getCartTotal= ()=> {
    const {products} = this.state
    let cartTotal = 0

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
      return '';
    })

    return cartTotal;
  }

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img :'',
        price: 90,
        qty:3,
        title: 'washing machine'
      })
      .then((docRef) => {
        console.log("product has been added " ,docRef)
      })
      .catch((error) =>{
        console.log('error : ',error)
      })
  }

  render(){
    const {products, loading} = this.state
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <button onClick={this.addProduct} style={{padding:20, fontSize:20}}>Add a product</button>
        <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        handleDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h2>loading products...</h2>}
        <div style={{fontSize: 20, padding:10}}>TOTAL : {this.getCartTotal()}</div>

      </div>
    );
  }
}

export default App;
