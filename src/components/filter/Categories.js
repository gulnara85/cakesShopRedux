import Filter from "./Filter";

const Categories = () => {

    return (
        <div className="categories"  >
        {['ALL','CAKES','CUPCAKES','PARTY CAKES' ].map(category => <Filter category = {category} key={category} /> )}
        </div>
    )
}
export default Categories;