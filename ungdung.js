function cong() {
    let somot = parseInt(document.getElementById("nhapdulieu").value)
    let sohai = parseInt(document.getElementById("nhapdulieu2").value)
    let ketmot = somot + sohai;
    document.getElementById("ketquacuoi").innerHTML = ketmot
}

    function phepchu() {
        let somot = parseInt(document.getElementById("nhapdulieu").value)
        let sohai = parseInt(document.getElementById("nhapdulieu2").value)
        let kethai = somot - sohai;
        document.getElementById("ketquacuoi").innerHTML = kethai
    }
    function phepnhan() {
        let somot = parseInt(document.getElementById("nhapdulieu").value)
        let sohai = parseInt(document.getElementById("nhapdulieu2").value)
        let ketba = somot * sohai;
        document.getElementById("ketquacuoi").innerHTML = ketba

    }

    function phepchia() {
        let somot = parseInt(document.getElementById("nhapdulieu").value)
        let sohai = parseInt(document.getElementById("nhapdulieu2").value)
        let ketbon = somot / sohai;
        document.getElementById("ketquacuoi").innerHTML = ketbon

    }

