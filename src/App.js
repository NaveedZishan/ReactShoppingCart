import React,{useEffect,useState} from "react";
import { Route,Routes } from "react-router-dom";
import ApiFetch from "./ApiFetch";
import Cart from "./Cart";

function App(){
const[Products,setProducts]=useState([])
const[cart,setCart]=useState([])

useEffect(()=>{
fetch("https://dummyjson.com/products")
.then((Response)=>Response.json())
.then((data)=>{
  setProducts(data.products)
})

},[])

const addeditems=(product)=>{
setCart((prevState)=>[...prevState,product])

}
return(<>
<Routes>

<Route path="/" element={<ApiFetch Products={Products}  addeditems={addeditems} />}  />
<Route path="cart" element={<Cart cart={cart} />} />
</Routes>
</>)

}
export default App