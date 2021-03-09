//Tem um cliente e se for 100 pontos ele vai ser premium, se for abaixo vai ser comum

let pontos = 200;
let tipo = pontos > 100? 'premium': 'comum';//Aqui primeiro é a comparação e as possivveis soluções dado o problema, isso é feito para economizar os ifs que podem ser feitos
console.log(tipo);
