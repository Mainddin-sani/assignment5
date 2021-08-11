
// get document id  
let getDocumentId = id => {
    return document.getElementById(id);
}
getDocumentId('search_btn').addEventListener('click', () => {
    getApiResult();
})

// // get API response 
const getApiResult = async () => {
    let searchInput = getDocumentId('search_name').value;
    if(searchInput != '') {
        try{
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
            const theMeal =  await response.json()
            data = theMeal.meals
            
        } catch(err){
            console.log(err);
        }
       let mainDiv = getDocumentId('items_result');
        if(data!=null){
            data.forEach(element => {
                let createDiv = document.createElement('div');
                createDiv.className = "col-lg-3"
                let mealsItems = `
                <div class="result-items text-center" onclick=mealDisplay('${element['strMeal']}')>
                    <img src="${element['strMealThumb']}" class="img-fluid" alt="images">
                    <h5>${element['strMeal']}</h5>
                </div>
                `
                createDiv.innerHTML = mealsItems;
                mainDiv.appendChild(createDiv);
            
            });
            }else{
                alert('not found')
            }
      
    }else{
        alert('not found')
    }
    
}



// The meals Details
const mealDisplay = name => {
    try {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
        fetch(url)
        .then(res => res.json())
        .then(data => mealIngredients(data.meals[0]))
    }catch {
        console.log(err);
    }
}

const mealIngredients = ingredients => {
    console.log(ingredients[30]);
    let mealsDetails = getDocumentId('meals_details');
    mealsDetails.innerHTML = `
        <img  src="${ingredients['strMealThumb']}" alt="image" class="w-100 img-fluid product">
        <h3>${ingredients['strMeal']}</h3>
        <h6>Ingredients</h6>
        <ul>
            <li><img src="images/check.png" alt=""> ${ingredients['strIngredient1']} ${ingredients['strMeasure1']}</li>
            <li><img src="images/check.png" alt=""> ${ingredients['strIngredient2']} ${ingredients['strMeasure2']}</li>
            <li><img src="images/check.png" alt=""> ${ingredients['strIngredient3']} ${ingredients['strMeasure3']}</li>
            <li><img src="images/check.png" alt=""> ${ingredients['strIngredient4']} ${ingredients['strMeasure4']}</li>
            <li><img src="images/check.png" alt=""> ${ingredients['strIngredient5']} ${ingredients['strMeasure5']}</li>
        </ul>
    `
}