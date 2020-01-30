// our code below
import { bodyText, body } from "./body.js"
import { removeOther } from "./homepage.js"

const recipeBody = document.createElement('div');
const recipeName = document.createElement('div');
const recipeInfo = document.createElement('div');
const recipePicture = document.createElement('img');

recipePicture.style.position = 'absolute'
recipePicture.style.bottom = '0px'
recipePicture.style.left = '0px'
recipePicture.style.maxWidth = '100%'
recipePicture.style.height = '215px'


recipeName.style.fontSize = '25px'
recipeName.style.textDecoration = 'underline'


recipeInfo.style.fontSize = '14px'
recipeInfo.style.width = '500px';
recipeInfo.style.height = '100px'
recipeInfo.style.overflow = 'scroll';
recipeInfo.style.paddingTop = '15px'

async function API(){
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const response = await fetch(url);
    const data = await response.json();
    const mealName = data.meals[0].strMeal;
    const mealPicture = data.meals[0].strMealThumb;
    const mealInstructions = data.meals[0].strInstructions;
    return { data: data, mealName: mealName, mealPicture: mealPicture, mealInstructions: mealInstructions }
}

function setRecipe (data){
    recipeName.textContent = 'Totally KETO '+ data.mealName;
    recipeInfo.textContent = data.mealInstructions;
    recipePicture.setAttribute("src", data.mealPicture)
    recipeBody.appendChild(recipeInfo)
    recipeBody.appendChild(recipePicture)
} 

recipeBody.appendChild(recipeName);

const recipeText = () => { API().then(setRecipe); bodyText.textContent = ''; removeOther();
body.appendChild(recipeBody);

}


export { recipeText }