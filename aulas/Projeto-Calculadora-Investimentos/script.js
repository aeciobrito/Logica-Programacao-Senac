function simularInvestimento() {
    const aporteInicial = parseFloat(document.getElementById("aporteInicial").value);
    const meses = parseInt(document.getElementById("meses").value);
    const aporteMensal = parseFloat(document.getElementById("aporteMensal").value);
    const taxaJurosAnual = parseFloat(document.getElementById("taxaJuros").value);

    if (isNaN(aporteInicial) || isNaN(meses) || isNaN(aporteMensal) || isNaN(taxaJurosAnual)) {
        alert("Por favor, preencha todos os campos com valores numéricos.");
        return;
    }

    const taxaJurosMensal = Math.pow(1 + taxaJurosAnual / 100, 1 / 12) - 1;

    let totalInvestido = aporteInicial;
    let resultadoHTML = '<ul id="resultado-lista">';

    for (let i = 1; i <= meses; i++) {
        const rendimentoMensal = totalInvestido * taxaJurosMensal;
        totalInvestido += rendimentoMensal;
        totalInvestido += aporteMensal;

        resultadoHTML += `<li>Mês ${i}: R$ ${totalInvestido.toFixed(2)}</li>`;
    }

    resultadoHTML += '</ul>';

    document.getElementById("resultado-container").innerHTML = resultadoHTML;
}
