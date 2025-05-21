document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");
    const tabela = document.getElementById("resultado").querySelector("tbody");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const tabuada = Number(document.getElementById("tabuada").value);
        const multiplicador = Number(document.getElementById("multiplicador").value);
        const limite = Number(document.getElementById("limite").value);

        tabela.innerHTML = "";

        for (let i = multiplicador; i <= limite; i++) {
            const resultado = tabuada * i;

            const linha = document.createElement("tr");

            const expressao = document.createElement("td");
            expressao.textContent = `${tabuada} x ${i}`;

            const valor = document.createElement("td");
            valor.textContent = resultado;

            linha.appendChild(expressao);
            linha.appendChild(valor);

            tabela.appendChild(linha);
        }
    });
});