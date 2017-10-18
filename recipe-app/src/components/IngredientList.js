import Ingredient from './Ingredient'

// How is 'list' decided as argument to pass? 
const IngredientList = ({list}) =>
    <ul className="ingredients">
        {list.map((ingredient, i) =>
        <Ingredient key={i} {...ingredient}/>
        )}
    </ul>
export default IngredientList    