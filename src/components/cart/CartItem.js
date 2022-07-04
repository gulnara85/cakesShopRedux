import dataCakes from "../data/dataCakes";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../redux/CartSlice";

const CartItem = ({cartItem}) => {
    console.log (cartItem)

    const cakes = dataCakes.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();

    return (
    <div  className="myCartItems">
        
        <img alt="pic"  src={`./${cakes.img}.jpg`} width="90px" height="100px" />
        <div className="itemsInCart">
        <h4>{cakes.name} </h4> 
        <p>{cartItem.quantity} portion(s)</p>
        <p> Price: ${cakes.price * cartItem.quantity} </p>
        </div>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>    
        <img className="icon" alt="pic" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
        </span>
        
    </div>
    )
    }
    
    export default CartItem;