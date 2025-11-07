const numRandom = document.querySelector("h1");
const inputUser = document.querySelectorAll(".form-control");
const btnResult = document.getElementById("submitBtn");
const risultato = document.getElementById("result");
let arrayNumerico = arrayNumbers();
let arrayUser = [];

// genera array di numeri random
function arrayNumbers(length = 5, min = 1, max = 100) {
  const risultati = [];
  while (risultati.length < length) {
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!risultati.includes(numero)) {
      risultati.push(numero);
    }
  }
  return risultati;
}


// visualizza numeri random
numRandom.innerHTML = arrayNumerico.join(", ");

// timer per nascondere numeri e mostrare i campi input
setTimeout(function () {
  numRandom.innerHTML = "ora tocca a te ricordare! miao miao";
  document.querySelector('.d-none').classList.remove('d-none');
}, 8000);

btnResult.addEventListener("click", function (event) {
  event.preventDefault();

  arrayUser = []; 
  inputUser.forEach(input => {
    arrayUser.push(parseInt(input.value.trim()));
  });

  let azzeccati = 0;
  arrayUser.forEach(numero => {
    if (arrayNumerico.includes(numero)) {
      azzeccati++;
    }
  });
if(azzeccati > 1){
  risultato.innerHTML = `Hai azzeccato ${azzeccati} numeri`;
}
else{
  risultato.innerHTML = `hai azzeccato ${azzeccati} numero`
}

});
