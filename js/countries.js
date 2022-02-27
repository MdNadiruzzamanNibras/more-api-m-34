const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

loadCountries()
 const displayCountries = counties =>{
    //   for( const country of counties){
    //       console.log(country.name)
    //   }
    const countiesDiv =document.getElementById('counties')
     counties.forEach(country=> {
         
         const div = document.createElement('div')
         const h3 = document.createElement('h3');
         div.classList.add('counties')
         div.innerHTML= `
         <h3>${country.name.common}</h3>
         <p>${country.capital}</p>
         <button onclick="loadDetails('${country.name.common}')">Details</button>`
        //  h3.innerText=country.name.common;
        //  div.appendChild(h3);
        //  const p = document.createElement('p');
        //  p.innerText= country.capital;
        //  div.appendChild(p);
         countiesDiv.appendChild(div)

     })
 }

 const loadDetails =name =>{
     const url =`https://restcountries.com/v3.1/name/${name}`;
     fetch(url)
     .then(res => res.json())
     .then(data => diplayDetails(data[0]))
 }
   const diplayDetails =country=>{
       console.log(country.flags.png)
        const countryDetails =document.getElementById('country-details');
        countryDetails.innerHTML = ` 
        <h3>${country.name.common} </h3>
        <p> population: ${country.population} 
        </p>
        <img width="200px" src="${country.flags.png}">`   
   }