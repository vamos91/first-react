import React, { useState } from "react";
import "./burger.css"


const Burger = (props) => {
    
    const [like, setLike] = useState(0)
    console.log('component reloaded')
    const handleClick = () => {
        setLike(like + 1)
    }

    const orderBurger = () => {
        props.handleParentClick(props.burgerName)
    }

    return (
        <div className="burger">
            <img width="200" src="https://www.biofournil.com/wp-content/uploads/2021/02/BRIOCHE-BIOFOURNIL_web.jpg" alt="burger" />
            <div className="burger-name">{props.burgerName}</div>
            <div className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, voluptatum!</div>
            <button onClick={() => handleClick()}>Like - {like != 0 ? like : ''}</button>
            <button onClick={() => orderBurger()}>Commander</button>
        </div>
    )
}

export default Burger;