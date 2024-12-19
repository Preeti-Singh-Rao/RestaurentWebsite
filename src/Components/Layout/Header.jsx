import React, { Fragment } from "react";
import "./Header.css";
import FoodImg from "../../assets/images/foodimg.jpg"


const Header=()=>{
return(
    <Fragment>
        <header className="header">
            <h1>ReactMeals</h1>
            <button>Cart</button>
            
        </header>
        <img className="main-image img"  src={FoodImg}/>
        
        
          
    </Fragment>
) 
}

export default Header;