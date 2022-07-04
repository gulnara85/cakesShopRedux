import CartItem from "./CartItem";
import { getCartItems, getTotalPrice, getTotalQuantity } from "../redux/CartSlice";
import { useSelector } from "react-redux";
import ContactUs from "../../ContactUs";

const Cart = () => {

    const cartItems = useSelector (getCartItems);
    const totalPrice = useSelector (getTotalPrice);
    const totalQuantity = useSelector (getTotalQuantity);

    return (
    <div >
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="container">
            <h2>My Cart</h2>
        </div>
        {cartItems.map (cartItem =><CartItem cartItem={cartItem} /> ) }
        
        <div  className="container">
        <h4>Total items:{totalQuantity} </h4>
        </div>
        <div className="container">
        <h3>TOTAL: ${totalPrice} </h3>
        </div>

        <div className="container">
            <button className="submit">Check out</button>
        </div>

        <ContactUs/>

        </div>
        
    )
}
export default Cart;