const numRandom = document.querySelector("h1");
const inputUser = document.querySelectorAll(".form-control");
const btnResult = document.getElementById("submitBtn");
const risultato = document.getElementById("result");
let arrayNumerico = arrayNumbers();
let arrayUser = [];

// genera array di numeri random
function arrayNumbers(length = 5) {
  return Array.from(Array(length), () => Math.floor(Math.random() * 100) + 1);
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
