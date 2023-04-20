import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {

    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    // Images API
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

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

    function addToCart(newItem) {
        setCartItems((prevItems) => [ ...prevItems, newItem])
        console.log(newItem.id)
    }

    function removeFromCart(id) {
        // Get the previous cart items and filter out the cart items that don't match the items id
        setCartItems((prevItems) => prevItems.filter((item) => item.id != id))
    }

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}