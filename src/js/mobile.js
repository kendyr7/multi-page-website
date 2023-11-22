// Mobile View for Country Dropdown

const countrySelector = document.getElementById('country-selector');
const countryList = document.getElementById('country-list');
const countries = {
    'América del Norte': [
        { name: 'Guatemala', flagSrc: '../assets/pricing/desktop/guatemala.svg' },
        { name: 'Managua', flagSrc: '../assets/pricing/desktop/nicaragua.svg' },
        { name: 'México', flagSrc: '../assets/pricing/desktop/mexico.svg' },
        { name: 'San Pedro Sula', flagSrc: '../assets/pricing/desktop/honduras.svg' },
        { name: 'Polochic', flagSrc: '../assets/pricing/desktop/guatemala.svg' },
        { name: 'Tuxtla Gutierrez', flagSrc: '../assets/pricing/desktop/mexico.svg' },
    ],
    'América del Sur': [
        { name: 'Bogota', flagSrc: '../assets/pricing/desktop/colombia.svg' },
        { name: 'Lima', flagSrc: '../assets/pricing/desktop/peru.svg' },
        { name: 'Santo Domingo', flagSrc: '../assets/pricing/desktop/dominican-republic.svg' },
        { name: 'Venezuela', flagSrc: '../assets/pricing/desktop/venezuela.svg' },
    ],
    'África': [
        { name: 'Malawi', flagSrc: '../assets/pricing/desktop/malawi.svg' },
        { name: 'Praia', flagSrc: '../assets/pricing/desktop/cabo.svg' },
    ],
    'Asia': [
        { name: 'Nom Pen', flagSrc: '../assets/pricing/desktop/cambodia.svg' },
        { name: 'Siem Reap', flagSrc: '../assets/pricing/desktop/cambodia.svg' },
    ],
};

// Function to populate the country list based on the selected continent
function populateCountryList(selectedCountry) {
    countryList.innerHTML = '';

    for (const country of countries[selectedCountry]) {
        const countryItem = document.createElement('li');
        countryItem.innerHTML = `<img class="flag" src="${country.flagSrc}" alt="check"> ${country.name}`;
        countryList.appendChild(countryItem);
    }
}

// Pre-load and display América Central countries on page load
window.addEventListener('load', () => {
    populateCountryList('América Central');
});

// Event listener for the country selector
countrySelector.addEventListener('change', () => {
    const selectedCountry = countrySelector.value;
    populateCountryList(selectedCountry);
});
