// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const endpoint = './cities.json';
const cities = [];

// console.log(fetch(endpoint));    // return promise having response
// fetch(endpoint).then(res => console.log(res));    // return Response
// fetch(endpoint).then(res => console.log(res.json()));    // return another promise but it has array[1000].

fetch(endpoint)
    .then(res => res.json())
    .then(data => cities.push(...data));

function findMatch(wordToMatch, cities) {
    return cities.filter(place => {
        // here we need to figure out if the city or state matches what was searched.
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
    // console.log(this.value);
    const matchArray = findMatch(this.value, cities);
    // console.log(matchArray);
    const html = matchArray.map(element => {
        // following is added to highlight the text typed in search box.
        const regex = new RegExp(this.value, 'gi');
        const cityName = element.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const stateName = element.state.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
                    <li>
                        <span class="name">${cityName}, ${stateName}</span>
                        <span class="population">${numberWithCommas(element.population)}</span>
                    </li>
                `;
    }).join("");
    suggestions.innerHTML = html;
}

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches);
