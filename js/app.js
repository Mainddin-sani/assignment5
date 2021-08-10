
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
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
        const theMeal =  await response.json()
        data = theMeal.meals
    } catch(err){
        console.log(err);
    }
   let mainDiv = getDocumentId('items_result');
   data.forEach(element => {
       if(searchInput == element['strMeal']) {
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
       } if (searchInput == " ") {
        let error_Massage = getDocumentId('error_massage');
        let createDiv = document.createElement('div');
        console.log(createDiv);
        createDiv.innerHTML =`
            <p>Ami kicu pai nai</p>
        `
        error_Massage.appendChild(createDiv);
       } 
       else{
        let error_Massage = getDocumentId('error_massage');
        let createDiv = document.createElement('div');
        console.log(createDiv);
        createDiv.innerHTML =`
            <p>Ami kicu pai nai</p>
        `
        error_Massage.appendChild(createDiv);
       }
       
    
   });
}


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
    let mealsDetails = getDocumentId('meals_details');
    mealsDetails.innerHTML = `
        <img  src="${ingredients['strMealThumb']}" alt="image" class="w-100 img-fluid product">
        <h3>${ingredients['strMeal']}</h3>
        <h6>Ingredients</h6>
        <ul>
            <li><img src="images/check.png" alt=""> ${ingredients['strIngredient1']}</li>
            <li><img src="images/check.png" alt=""> ${ingredients['strIngredient2']}</li>
            <li><img src="images/check.png" alt=""> ${ingredients['strIngredient3']}</li>
            <li><img src="images/check.png" alt=""> ${ingredients['strIngredient4']}</li>
            <li><img src="images/check.png" alt=""> ${ingredients['strIngredient5']}</li>
            <li><img src="images/check.png" alt=""> ${ingredients['strIngredient6']}</li>
            <li><img src="images/check.png" alt=""> ${ingredients['strIngredient7']}</li>
            <li><img src="images/check.png" alt=""> ${ingredients['strIngredient8']}</li>
            <li><img src="images/check.png" alt=""> ${ingredients['strIngredient9']}</li>
            <li><img src="images/check.png" alt=""> ${ingredients['strIngredient10']}</li>
            <li><img src="images/check.png" alt=""> ${ingredients['strIngredient11']}</li>
            <li><img src="images/check.png" alt=""> ${ingredients['strIngredient12']}</li>
            <li><img src="images/check.png" alt=""> ${ingredients['strIngredient13']}</li>
        </ul>
    `
}