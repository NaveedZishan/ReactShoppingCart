import React ,{useEffect, useState}from "react";

function MyApp(){

const [items,setItems] =useState([])
const [Ccart,setCcart]=useState([])

useEffect(()=>{

fetch("https://dummyjson.com/products")
.then((Response)=>Response.json())
.then((data)=>{
setItems(data.products)

console.log(items);
})

    
},[])
console.log(items);
return(<>




</>)


}
export default MyApp