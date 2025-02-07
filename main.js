async function converter() {
    const realInput = document.getElementById("real-value").value;

    try {
        const response = await fetch(
            "https://api.coindesk.com/v1/bpi/currentprice/USD.json"
        );

        const data = await response.json();

        const precoEmDolar = data.bpi.USD.rate_float;

        const precoEmReal = precoEmDolar * 5.81;

        document.getElementById("btc-price").innerText = `R$ ${precoEmReal.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
        })}`

        if (realInput <= 0 || isNaN(realInput)) {
            alert("Digite um valor válido!");
            return;
        }

        const btcConvertido = realInput / precoEmReal;

        document.getElementById("btc-result").innerText = btcConvertido.toFixed(8) + "BTC";

    } catch (error) {
        document.getElementById("btc-price").innerText = "Erro ao carregar preço.";
        console.error("Erro ao buscar cotação:", error);
    }
}
converter();
