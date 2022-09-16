import React from "react";
import "./cart.css"
import { IoIosHome } from "react-icons/io";
// import { RiDeleteBin5Line } from "react-icons/ri";

import { Link } from "react-router-dom";

function Cart({ cart }) {

    // console.log(cart);

    // const deleteEvent = (id) => {
    //     console.log(id);

    //     cart.filter()

    // }

    return (
        <div id="mCartDiv">
            <div><h1 id="h1Cart">Cart Selected Items</h1>
            <hr />
                <h2 id="h2Cart"><Link to="/">
                    <IoIosHome />
                </Link> ClickOn</h2>
                <hr />
            </div>
            {
                <div id="beforeMap">
                    {cart.map((shop) => {
                        return (<div id="mapCartDiv">
                            <h4>Brand: {shop.brand}</h4>
                            <div id="imageCartDiv">
                                <img src={shop.thumbnail} alt="Cart Products" id="imageCart" />
                            </div>
                            <div id="infoCartDiv">
                                <ul>
                                    <li>
                                        Title: {shop.title}
                                    </li>
                                    <li>
                                        Price: {shop.price} 
                                    </li>
                                    <li>
                                        Rating:{shop.rating} 
                                    </li>

                                </ul>

                                {/* <h3 id="h3"> <button onClick={() => deleteEvent(shop.id)}  > <RiDeleteBin5Line /></button> </h3> */}
                            </div>
                        </div>)
                    })}</div>
            }
        </div >
    )
}
export default Cart;



