import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuntity from "../cart/ChangeQuantity";
import { addItemToCart } from "../redux/CartSlice";

const Cake = ({cake}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (
        <div className="allCakes" >
        <img alt="pic" className="picture" src={`./${cake.img}.jpg`}/>
        <div className="discription">
        <h2> {cake.name} </h2>
        <p>$ {cake.price} </p>
        <p> Size: {cake.size} </p>
        <p>Servings: {cake.servings} </p>

        <ChangeQuntity quantity={quantity} setQuantity = {setQuantity} />

        <button onClick={() => {dispatch(addItemToCart({cake,quantity}))} } > Add to Cart</button>
        </div>
        </div>
    )
}
export default Cake;