//Declarando as variaveis (nivel, nome e xp)
let nivel = "";
let nome = "Link";
let xp = 6999;

//Os ifs/else if percorrem até encontrar o valor que foi decidido na variavel de xp
if (xp < 1000) {
  nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
  nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
  nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
  //No caso desse código, esse seria o else if que seria escolhido para exibir
  nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
  nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
  nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
  nivel = "Imortal";
} else {
  //opção final, caso o jogador tenha mais de 10001 de xp ele se torna radiante
  nivel = "Radiante";
}

//aqui aonde é a saida, testado por node src/index.js
console.log("O Herói de nome " + nome + " está no nivel de " + nivel);
