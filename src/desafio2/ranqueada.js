
// Chamando a função com os valores do exemplo
let mensagem = calcularNivel('Jarvis', 105, 62);
console.log(mensagem);

function calcularNivel(userName, vitorias, derrotas) {
    let saldoRankeadas = vitorias - derrotas;
    let nivel;

    switch (true) {
        case (saldoRankeadas < 10):
            nivel = "Ferro";
            break;
        case (saldoRankeadas >= 11 && saldoRankeadas <= 20):
            nivel = "Bronze";
            break;
        case (saldoRankeadas >= 21 && saldoRankeadas <= 50):
            nivel = "Prata";
            break;
        case (saldoRankeadas >= 51 && saldoRankeadas <= 80):
            nivel = "Ouro";
            break;
        case (saldoRankeadas >= 81 && saldoRankeadas <= 90):
            nivel = "Diamante";
            break;
        case (saldoRankeadas >= 91 && saldoRankeadas <= 100):
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
    }

    return `O Herói ${userName} tem um saldo de ${saldoRankeadas} e está no nível ${nivel}`;
}

