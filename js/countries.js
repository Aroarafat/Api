const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.name}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button> 
        `;

        // DYNAMIC VABE NA KORTE CAILE NICHER MOTO KORE KORTE HOBE 

        // const h3 = document.createElement('h3')
        // h3.innerText = country.name
        // div.appendChild(h3)
        // const p = document.createElement('p')
        // p.innerText = country.capital
        // div.appendChild(p)
        countriesDiv.appendChild(div)
    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
}
const displayCountryDetail = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-detail')
    countryDiv.innerHTML = `
     <h4>${country.name}</h4>
     <p>Population:${country.population}</p>
     <img width="200px" src="${country.flag}">
`
}