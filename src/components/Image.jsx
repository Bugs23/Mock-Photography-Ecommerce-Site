import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"
import useHover from "../hooks/useHover"

function Image({className, img}) {

    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

    const [hovered, ref] = useHover()

    function heartIcon() {
        /* 
            If the image is favorited, show the filled heart icon
            If it's not favorited and it's being hovered over, show the unfilled heart icon
        */
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon() {
        // Check if the item's id matches any of the image id's in the cart
        const itemIsAlreadyInCart = cartItems.some((item) => item.id === img.id)

        /*
            If the item is already in the cart show the filled shopping cart icon
            If the image is being hovered show the unfilled shopping cart icon
        */
        if (itemIsAlreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        } 
    }

    return (
        <div 
            className={`${className} image-container`} 
            // onMouseEnter={() => setHovered(true)} 
            // onMouseLeave={() => setHovered(false)} 
            ref={ref}
        >
            <img src={img.urls.small} className="image-grid" />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        urls: PropTypes.shape({
            small: PropTypes.string.isRequired,
        }),
        isFavorite: PropTypes.bool
    })
}

export default Image