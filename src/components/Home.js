import React, { useContext, useEffect, useState } from "react";
import "../style.css";
import Categories from "../components/Categories";
import axios from "axios";
const API_URL = "https://restrobillingsystemjs.herokuapp.com/menu_list";

const Home = () => {
    const [getMenu, setGetMenu] = useState([])
    const [isloading, setIsLoading]  =useState(false)
    useEffect(()=>{
        setIsLoading(true)
        axios.get(API_URL).then((response) => {
            setGetMenu(response.data)
            console.log(response.data)
        })
        setIsLoading(false)
    },[])

    const filterItem = (category) => {
        const newItems = getMenu.filter((item) => item.category === category);
        setGetMenu(newItems);
    };

    if(isloading) return <p>Loading...</p>

    return (
        <>
            {/* <Categories filterItem={filterItem} /> */}

        <div className="section-center mt-5">
            {getMenu &&
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
                                    <button className="btn-add-cart shadow  my-2">Add to cart</button>
                                </div>
                            </div>
                        </article>
                    );
                })}
        </div>
        </>
    );
};

export default Home;
