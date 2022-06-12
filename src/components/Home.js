import React, { useContext, useEffect, useState,  } from "react";
import "../style.css";
import Categories from "../components/Categories";
import axios from "axios";
import { Cart } from "./Cart";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { Loader } from "./Loader";
const API_URL = "https://restrobillingsystemjs.herokuapp.com/menu_list";

const Home = () => {
    const [getMenu, setGetMenu] = useState([])
    const [isloading, setIsLoading] = useState(false)
    const { addItem, updateItemQuantity } = useCart();
    useEffect(() => {
        setIsLoading(true)
        axios.get(API_URL).then((response) => {
            setGetMenu(response.data)
            console.log(response.data)
            setIsLoading(false)
        })
    }, [])


    if(isloading) return <Loader/>

    return (
        <>
            {/* <Categories filterItem={filterItem} /> */}

            <div className="section-center mt-5">
                {getMenu ?
                    getMenu?.map((menuItem) => {
                        const { id, title, price, image, description } = menuItem;
                        console.log(image)
                        return (
                            <article key={id} className="menu-item shadow p-2 rounded">
                                <img src={image} alt={title} className="photo shadow p-1" />
                                <div className="item-info">
                                    <header>
                                        <h4> {title} </h4> <h4 className="price"> $ {price} </h4>
                                    </header>
                                    <div className="info">
                                        <p className="item-text"> {description} </p>
                                        <button onClick={() => addItem(menuItem)} className="btn-add-cart shadow  my-2">Add to cart</button>
                                    </div>
                                </div>
                            </article>
                        );
                    }): <Loader/>}
            </div>
            <div className="text-end py-2 px-3">
                <button className="btn-view" ><Link style={{ color: 'inherit' }} to='/cart'>View Cart {updateItemQuantity}</Link></button>
            </div>
            {/* <Cart /> */}
        </>

    );
};

export default Home;
