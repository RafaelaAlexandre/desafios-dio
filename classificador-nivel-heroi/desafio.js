// Variáveis para armazenar o nome do herói e sua experiência (XP)
let nome = prompt("Digite o nome do herói:");
let experiencia = parseInt(prompt("Digite a quantidade de experiência (XP) do herói:"));

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para determinar o nível do herói com base na experiência (XP)
if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000) {
    nivel = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = "Prata";
} else if (experiencia >= 5001 && experiencia <= 7000) {
    nivel = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000) {
    nivel = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000) {
    nivel = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
    nivel = "Imortal";
} else if (experiencia >= 10001) {
    nivel = "Radiante";
} else {
    nivel = "XP Inválido";
}

// Exibir a mensagem final com o nome e o nível do herói
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
