import Cakes from "./cakesComponents/Cakes";
import Categories from "./filter/Categories";



const Menu =() => {

    return (
        <div>
<br/>
<br/>
<br/>
<br/>


<div className='container'>
        <h2>CHOOSE YOUR DELIGHTS</h2>
      </div>

            <Categories/>

            <Cakes/>
        </div>
    )
}

export default Menu;