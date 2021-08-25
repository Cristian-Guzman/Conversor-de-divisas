// Dólar, Peso Mexicano, Peso Colombiano, Euro, Libra Esterlina
// https://api.exchangerate.host/latest?base=USD

let url = 'https://api.exchangerate.host/latest?source=ecb';

fetch(url)
    .then(r => {
        return r.json();
    })
    .then(d =>{
        console.log(d.rates.USD);
        console.log(d.rates.MXN);
        console.log(d.rates.EUR);
    })
    .catch(error =>{
        console.error(error);
    })
