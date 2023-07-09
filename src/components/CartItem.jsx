import React, {useState, useContext} from "react"
import {Context} from "../Context"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    // const [hovered, setHovered] = useState(false)
    const [hovered, ref] = useHover()
    const {removeFromCart} = useContext(Context)

    const trashIconClass = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i 
                className={trashIconClass} 
                onClick={() => removeFromCart(item.id)}
                ref={ref}
                // onMouseEnter={() => setHovered(true)}
                // onMouseLeave={() => setHovered(false)}
            >
            </i>
            <img src={item.urls.thumb} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem