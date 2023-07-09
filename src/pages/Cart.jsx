import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {

    const {cartItems, emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")

    const totalCost = cartItems.length * 5.99
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    // Go through cartItems array and create individual cart items to display on cart page
    const cartItemElements = cartItems.map((item) => {
        return (
            <CartItem key={item.id} item={item} />
        )
    })

    function placeOrder() {
        setButtonText("Ordering... ")

        setTimeout(() => {
            setButtonText("Place Order")
            emptyCart()
        }, 3000)

    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            { 
                cartItems.length > 0 ? 
                    <div className="order-button"><button onClick={placeOrder}>{buttonText}</button></div> 
                    : <p>You don't have any items in your cart.</p> 
            }
        </main>
    )
}

export default Cart