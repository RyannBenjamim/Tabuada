function calcular() {
    var num = document.getElementById("txtn")
    var res = document.getElementById("res")

    if (num.value.length == 0) {
        alert("[ERRO] Você não digitou um número!")
    } else {
        var valor = Number(num.value)
        res.innerHTML = `Tabuada de ${valor} <br><br>`
        for(let c = 1; c <= 10; c++) {
            res.innerHTML += `${valor} x ${c} = ${valor*c} <br>`
        }
    }
}