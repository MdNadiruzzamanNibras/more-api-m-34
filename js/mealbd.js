const searchBtn = () =>{
    const searchField = document.getElementById('search-field');
    const searchInput = searchField.value;
    
    searchField.value ='';
    if(searchInput== ''){
      return alert ('please enter a meal name')
    }
    else{
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchresult(data.meals))
    }
}
const displaySearchresult = (meals) =>{
     const searchResults =document.getElementById('search-results');
    //  searchResults.innerHTML = '';
    searchResults.textContent = '';
    if(meals.length==0){
      return alert ('please enter a meal name')
    }
    meals.forEach(meal=>{
        
        const searchDiv = document.createElement('div');
        searchDiv.classList.add('col');
        
        searchDiv.innerHTML =`
        <div onclick="loadmealisd(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
        </div>
      </div>
        `;
        searchResults.appendChild(searchDiv);
    })
}
const loadmealisd = mealid =>{
  const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
  fetch(url)
  .then(res => res.json())
  .then(data=> diplayMealDetails(data.meals[0])) 
}
const diplayMealDetails =(mealis)=>{
  
  const detailmeal = document.getElementById('meal-details');
  detailmeal.textContent ='';
  const div = document.createElement('div');
 
  div.classList.add('card');
  div.innerHTML=` <img src="${mealis.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${mealis.strMeal}</h5>
  
  <p class="card-text">${mealis.strInstructions.slice(0, 250)}</p>
  <a href="${mealis.strYoutube}" class="card-link">YouTube</a>
  <a href="#" class="card-link">Another link</a>
  
  </div>`;
   detailmeal.appendChild(div);
}