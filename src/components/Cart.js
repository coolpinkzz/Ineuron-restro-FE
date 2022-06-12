import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import '../cart.css'

export const Cart =() => {

    
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    useEffect(()=>{
        totalAmount()
    },[items])

    const totalAmount = ()=>{
        let total = 0
        items.forEach(currItem => {
            total+=currItem.price*currItem.quantity
        })
        console.log(total)
        return total
    }

    if (isEmpty) return (
        <>
            <p>Your cart is empty</p>
            <Link to='/home'>Go back</Link>
        </>
    
    )

    return (
        <div className="p-4 cart-container">
            <h3>Cart ({totalUniqueItems})</h3>
            <div className="cart-items">
                <div className="cart-items-container mt-2">
                    {items.map((currItem) => {
                        return(
                            <>
                                <div className="items-info">
                                    {/* <div className="product-img">
                                        <img height={30} src={currItem.image} alt="" />
                                    </div> */}
                                    <div className="title">
                                        <p style={{fontSize:'18px'}}> {currItem.title} </p>
                                    </div>
                                    <div className="add-minus-quantity">
                                        <i class="fa-solid fa-minus minus" onClick={() => updateItemQuantity(currItem.id, currItem.quantity - 1)}></i>
                                        <input style={{width:'40px', height:'30px'}} type="text" placeholder={currItem.quantity} />{" "}
                                        <i class="fa-solid fa-plus add" onClick={() => updateItemQuantity(currItem.id, currItem.quantity + 1)}></i>
                                    </div>
                                    <div className="price">
                                        <h3> {currItem.price *currItem.quantity}$ </h3>
                                    </div>
                                    <div className="remove-item">
                                        <i
                                            class="fa-solid fa-trash-alt remove"
                                            onClick={() => removeItem(currItem.id)}
                                        ></i>
                                    </div>
                                </div>
                                <hr />
                               
                            </>
                        )
                    })}
                    <div className="card-total">
                        <h3>
                            Cart Total: <span> {totalAmount()} </span>
                        </h3>
                        <button> Place Order </button>
                        
                        {/* <button className="clear-cart" onClick={clearCart}>
                                        Clear Cart
                                    </button> */}
                    </div>
                    <Link to='/home'>Go back</Link>
                </div>
            </div>



            {/* <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.quantity} x {item.title} &mdash;
                        <button
                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        >
                            -
                        </button>
                        <button
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                            +
                        </button>
                        <button onClick={() => removeItem(item.id)}>&times;</button>
                    </li>
                ))}
            </ul> */}
        </div>
    );
}