import React from "react";
import { BsCart4 } from "react-icons/bs"
import { Link } from "react-router-dom";
import "./cart.css"
//import calender from "./calender";


function ApiFetch({ Products, addeditems }) {
console.log(Products);

    return (<div id="mainDiv">
        <div id="cartIconDiv">  <h1>WISDOM SUPER MART.CORPORATION </h1>
        <hr />
            <Link to="/Cart">
                <h1><BsCart4/></h1>

            </Link>
<hr />
        </div>
        <div id="mapDiv">
            {Products.map((product)=>{
                return(

           <div>   
            
            <div> ProductNo:{product.id} 
            <div>
            
            <img src={ product.thumbnail}  alt=""></img>
            </div>

            <div id="infoDiv">

            <ul id="data">
                                <li>
                                    Category: {product.category}
                                </li>
                                <li>
                                    Brand: {product.brand}
                                </li>
                                <li>
                                    Title: {product.title}
                                </li>
                                <li>
                                    Price: {product.price} {`$`}
                                </li>
                                <li>
                                    Rating:{product.rating} {`  Out of 5`}
                                </li>
                            </ul>
                <hr />
                            <div>

<button id="btn1" onClick={() => addeditems(product)}>Add</button>
</div>


            </div>
            
            </div>
            
            
            
               </div>

                )
            })





        }


        </div>

    </div>)
}
export default ApiFetch