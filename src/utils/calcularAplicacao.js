export default function Aplicacao(aplicacaoMensal, taxa, tipoTaxa = "a.a", periodo, tipoPeriodo = "meses") {

    if (tipoTaxa == 'a.a' && tipoPeriodo == 'meses') periodo = periodo / 12;
    if (tipoTaxa == 'a.m' && tipoPeriodo == 'anos') periodo = periodo * 12;

    if (periodo < 1) {
        let montante = aplicacaoMensal * (1 + (Number(taxa) / 100)) ** Number(periodo);
        let juros = montante - aplicacaoMensal
        let result = [{
            mes: 1,
            capital: Number(aplicacaoMensal),
            juros,
            montante
        }]
        return result
    }

    let resultados = []

    for (let mes = 0; mes < Number(periodo); mes++) {

        if (mes > 0) {

            let calculo = {
                mes: mes + 1,
                capital: resultados[mes - 1].montante,
                montante: (resultados[mes - 1].montante * (1 + (Number(taxa) / 100))) + (mes == Number(periodo) - 1 ? 0 : Number(aplicacaoMensal)),
            }

            calculo.juros = calculo.montante - calculo.capital - (mes == Number(periodo) - 1 ? 0 : Number(aplicacaoMensal));

            resultados.push(calculo)
        }
        else {
            let calculo = {
                mes: mes + 1,
                capital: Number(aplicacaoMensal),
                montante: (Number(aplicacaoMensal) * (1 + (Number(taxa) / 100))) + Number(aplicacaoMensal),
            }

            calculo.juros = calculo.montante - calculo.capital - Number(aplicacaoMensal);

            resultados.push(calculo)
        }


    }

    return resultados;
}