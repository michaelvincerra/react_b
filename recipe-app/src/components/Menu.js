import Recipe from './Recipe'
import '../../stylesheets/Menu.css'

const Menu = ({title, recipes})  => 
<article>
    <header>
        <h1> Delicious Recipes</h1>
    </header>

    <div className="recipes">
        {recipes.map((recipe, i) =>
        // Uses spread operator to include all
        <Recipe key={i} {...recipe} />
        /* ingredients={recipe.ingredients}
            steps={recipe.steps} */
        )}
    </div>
</article>   

Menu.displayName = 'Menu'

export default Menu
