// Função que calcula o saldo de partidas e determina o nível do jogador
function calcularSaldoRankeadas(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;
  
    // Variável para armazenar o nível do jogador
    let nivel;
  
    // Estrutura de decisão para determinar o nível do jogador com base no número de vitórias
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else if (vitorias >= 101) {
      nivel = "Imortal";
    } else {
      nivel = "XP Inválido";
    }
  
    // Exibe a mensagem final com o saldo e o nível do jogador
    console.log(`O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`);
  }
  
  // Entrada de dados: vitórias e derrotas do jogador
  let vitorias = parseInt(prompt("Digite a quantidade de vitórias do jogador:"));
  let derrotas = parseInt(prompt("Digite a quantidade de derrotas do jogador:"));
  
  // Chamada da função com os parâmetros de vitórias e derrotas
  calcularSaldoRankeadas(vitorias, derrotas);
  