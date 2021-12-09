function sm() {
    let amount = document.getElementById("tien").value;
    let fromCurrency = document.getElementById("tienmot").value;
    let toCurrency = document.getElementById("tienhai").value;
    if (fromCurrency === toCurrency) {
        let result = amount;
        document.getElementById("result").innerHTML = "convert:" + result;
    } else if (fromCurrency === "vn" ) {
        let result = amount / 23000;
        document.getElementById("result").innerHTML = "convert:" + result;
    } else {
        let result = amount * 23000;
        document.getElementById("result").innerHTML = "convert:" + result;
    }
}