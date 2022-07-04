
import dataCakes from "../data/dataCakes";
import { useSelector } from "react-redux";
import Cake from "./Cake";
import { getSelectedCategory } from "../redux/cakesSlice";

const Cakes = () => {

    const selectedCategory = useSelector(getSelectedCategory);

    return (

        <div className="cakesPosition" >
            {dataCakes
             .filter(cake => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === cake.category;
            })
            .map (cake => <Cake cake = {cake} />)}
        </div>
    )
}
export default Cakes;