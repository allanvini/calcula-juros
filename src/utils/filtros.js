export function PeriodoAmortizacao(de, ate, data) {

    if (Number(de) < 1) de = 1
    if (Number(ate) > data.length) ate = data.length

    let prestacoes = [];
    let juros = [];
    let amortizacao = [];

    for (let counter = Number(de) - 1; counter <= Number(ate) - 1; counter++) {
        prestacoes.push(data[counter].prestacao)
        juros.push(data[counter].juro)
        amortizacao.push(data[counter].amortizacao)
    }

    return {
        prestacoes: prestacoes.reduce((partialSum, a) => partialSum + a, 0),
        juros: juros.reduce((partialSum, a) => partialSum + a, 0),
        amortizacao: amortizacao.reduce((partialSum, a) => partialSum + a, 0)
    }
}