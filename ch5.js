
// data is an array of recipe objects
var data = [
    {
    "name": "Baked Salmon", 
    "ingredients": [
        {"name":"Salmon", "amount": 1, "measurement": "1 lb."},   
        {"name":"Pine Nuts", "amount": 1, "measurement": "cup."},   
        {"name":"Butter Lettuce", "amount": 2, "measurement": "cups."},   
        {"name":"Yellow Squash", "amount": 1, "measurement": "medium"},   
        {"name":"Olive Oil", "amount": 0.5, "measurement": "cup"},   
        {"name":"Garlic", "amount": 3, "measurement": "cloves"}   
        ], 
    "steps": [
        "Preheat oven to 350 degrees.", 
        "Spread the olive oil around a glass baking dish.",
        "Add the salmon, garlic, and pine nuts to the dish.", 
        "Bake for 15 minutes.", 
        "Add the yellos squash and put back in the oven for 30 minutes.",
        "Remove from oven and let cool for 15 minutes. Add lettuce and serve."
        ]
    }, 
    {
    "name": "Fish Tacos", 
    "ingredients": [
        {"name":"Whitefish", "amount": 1, "measurement": "1 lb."},   
        {"name":"Cheese", "amount": 1, "measurement": "cup."},   
        {"name":"Iceberg Lettuce", "amount": 2, "measurement": "cups."},   
        {"name":"Tomatoes", "amount": 2, "measurement": "large"},   
        {"name":"Tortillas", "amount": 3, "measurement": "medium"}   
        ], 
    "steps": [
        "Cook the fish on the grill until hot.", 
        "Place the fish on the 3 tortillas",
        "Top them with lettuce, tomatoes, and cheese.", 
        ]
    }
    ];

// A stateless functional Component for an INDIVIDUAL RECIPE. 
const Recipe = ({name, ingredients, steps})  => 
    <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1> {name}</h1>
        <ul className="ingredients">
            {ingredients.map((ingredient, i) =>
                <li key={i}>{ingredient.name}</li>
                )}
        </ul>
        <section className="instructions"> 
            <h2> Cooking Instructions </h2>
            {steps.map((step, i) =>
                <p key={i}>{step}></p>
            )}        
        </section>        
    </section>




// A stateless functional component for the MENU of recipes. 
// Explain how removal of '(props)' argument enables use to remove 'props' below?
const Menu = ({title, recipes})  => 
    <article>
        <header>
            <h1>{title}</h1>
        </header>
        <div className="recipes">
            {recipes.map((recipe,i) =>
            // Uses spread operator to include all
            <Recipe key={i} {...recipe}/>
                {/* ingredients={recipe.ingredients}
                steps={recipe.steps} */}
            )}
        </div>
    </article>    



// A call to React.DOM.render to render our MENU into the current DOM
React.DOM.render(
    <Menu recipes={data} title="Delicious Recipes" />,
    document.getElementById("react-container")
)







// Stateless functional components are functions 
// that take in properties (props) and return a DOM element

// const ingredientList = props =>
//     React.createElement("ul", {className: "ingredients"}, 
//         props.items.map((ingredient, i) =>
//             React.createElement("li", {key: i}, ingredient)
//     )
// )