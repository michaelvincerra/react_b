import Ingredient from './Ingredient'

// How is 'list' decided as argument to pass? 
export const IngredientsList = ({ list }) =>
    <ul className="ingredients">
        {list.map((ingredient, i) =>
        <Ingredient key={i} {...ingredient}/>
        )}
    </ul>

IngredientsList.displayName = 'IngredientsList'

export default IngredientsList    