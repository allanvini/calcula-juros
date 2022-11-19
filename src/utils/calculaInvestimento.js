export default function Investimento(capital, taxa, tipoTaxa='a.m', periodo, tipoPeriodo='meses') {

    if (tipoTaxa == 'a.a' && tipoPeriodo == 'meses') periodo = periodo / 12;
    if (tipoTaxa == 'a.m' && tipoPeriodo == 'anos') periodo = periodo * 12;

    let resultados = []

    for (let mes = 0; mes < Number(periodo); mes++) {

        if (mes > 0) {

            let calculo = {
                mes: mes + 1,
                capital: resultados[mes-1].montante,
                montante: resultados[mes-1].montante * (1 + (Number(taxa) / 100)),
            }

            calculo.juros = calculo.montante - calculo.capital;

            resultados.push(calculo)
        }
        else {
            let calculo = {
                mes: mes + 1,
                capital: Number(capital),
                montante: Number(capital) * (1 + (Number(taxa) / 100)),
            }
    
            calculo.juros = calculo.montante - calculo.capital;
    
            resultados.push(calculo)
        }


    }

    return resultados;
}