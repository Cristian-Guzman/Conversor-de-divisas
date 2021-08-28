// Dólar, Peso Mexicano, Peso Colombiano, Euro, Libra Esterlina

//Añadiendo variables
let url = 'https://api.exchangerate.host/latest?base=USD';
let amountMoney = document.querySelector('.amountMoney');
let conversion = document.querySelector(".conversion");
let divSelect1 = document.querySelector('.bloque__left')
let divSelect2 = document.querySelector('.bloque__right')
let moneda = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
let searchValue;

//Creando elementos
let select = document.createElement("SELECT");
let select2 = document.createElement("SELECT");
let fragment = document.createDocumentFragment();
let fragment2 = document.createDocumentFragment();
        
select.classList.add('boton');
select.classList.add('from');
select2.classList.add('boton')
select2.classList.add('to')
    
// function para añadir los valores del array "moneda" al elemento option
function addInfoToBoton() {
      
    moneda.forEach( valor => {
        let option = document.createElement("OPTION");
        option.textContent = valor;
        option.value = valor;
        fragment.appendChild(option);

        let option2 = document.createElement("OPTION");
        option2.textContent = valor;
        option2.value = valor;
        fragment2.appendChild(option2);
      
})
    select.appendChild(fragment);
    divSelect1.appendChild(select);

    select2.appendChild(fragment2);
    divSelect1.appendChild(select2);
}

addInfoToBoton();

// añadiendo la etiqueta disabled
let btnFrom = document.querySelector('.from');
let btnTo = document.querySelector(".to");
let btnOption = btnFrom.firstChild;
let btnOption2 = btnTo.firstChild;
let resultFrom;
let resultTo;
btnOption.setAttribute("disabled", "disabled");
btnOption2.setAttribute("disabled", "disabled");
  
let fromCurrency = document.querySelector('.from');
let toCurrency = document.querySelector('.to');
let alert = document.querySelector('.alerta');
alert.style.display = "none";

fromCurrency.addEventListener('input', (e) => {
    resultFrom = `${e.target.value}`;
    if (resultFrom == 'Dolar') {
        resultFrom = "USD";
    } else if (resultFrom == 'Peso Mexicano') {
        resultFrom = "MXN";
    } else if (resultFrom == 'Peso Colombiano') {
        resultFrom = "COP";
    } else if (resultFrom == 'Euro') {
        resultFrom = "EUR";
    } else if (resultFrom == 'Libra Esterlina') {
        resultFrom = "GBP";
    }
    console.log(resultFrom)
});

toCurrency.addEventListener('change', (e) => {
    resultTo = `${e.target.value}`;
    if (resultTo == 'Dolar') {
        resultTo = "USD";
    } else if (resultTo == 'Peso Mexicano') {
        resultTo = "MXN";
    } else if (resultTo == 'Peso Colombiano') {
        resultTo = "COP";
    } else if (resultTo == 'Euro') {
        resultTo = "EUR";
    } else if (resultTo == 'Libra Esterlina') {
        resultTo = "GBP";
    }
    console.log(resultTo);
})

function updateValue(e) {
    searchValue = e.target.value;
}

amountMoney.addEventListener('input', updateValue);


const getResults = () => {
    fetch(`${url}`)
    .then( c => c.json())
    .then(displayResults);
}

function displayResults(c) {
    let fromRate = c.rates[resultFrom];
    let toRate = c.rates[resultTo];
    alert.textContent = `${searchValue} ${resultFrom} convertido a: ${((toRate / fromRate) * searchValue).toFixed(2)} ${resultTo}`;
    alert.style.display = "block";
}
const checkValues = () => {
    if (isNaN(searchValue) || btnFrom.value == "Elige tu Moneda" || btnTo.value == "Elige tu Moneda") {
        alert.textContent = "Ingresa un número válido y rellena todos los campos ";
        alert.style.display = "block";
    } else {
        getResults();
    }
}
// function para actualizar el valor a ingresar
conversion.addEventListener("click", v => checkValues());
  
