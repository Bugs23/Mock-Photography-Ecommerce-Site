import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {

    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    // Images API
    const url = "https://api.unsplash.com/photos/?client_id=5K8yFj7li_5ojZLRGDw9rJm0vRFEPeOJA7FKPRQ2IIw"

    // Get the images
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map((photo) => {
            if (photo.id === id) {
                return { ...photo, isFavorite: !photo.isFavorite }
            }

            return photo
        })

        setAllPhotos(updatedArr)
    }

    // Add item to cart
    function addToCart(newItem) {
        setCartItems((prevItems) => [ ...prevItems, newItem])
    }

    // Remove item from cart
    function removeFromCart(id) {
        // Get the previous cart items and filter out the cart items that don't match the items id
        setCartItems((prevItems) => prevItems.filter((item) => item.id != id))
    }

    function emptyCart() {
        setCartItems([])
    }

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}