let elementos = document.querySelectorAll(".table-elemento")

let menu = document.getElementById("menu")

let nome = document.getElementById("nome")
let numero = document.getElementById("numero")
let categoria = document.getElementById("categoria")
let massa = document.getElementById("massa")

elementos.forEach(el => {

    el.addEventListener("click", () => {

        elementos.forEach(e => {
            e.classList.remove("ativo")
            e.classList.remove("destacado")
        })

        el.classList.add("ativo")

        let cat = el.classList[2]

        document.querySelectorAll("." + cat).forEach(e => {
            e.classList.add("destacado")
        })

        nome.innerText = el.dataset.nome
        categoria.innerText = "Classificacao: " + el.dataset.categoria
        numero.innerText = "Nº atomico: " + el.dataset.numero
        massa.innerText = "Massa: " + el.dataset.massa
        estado.innerText = "Estado (20ºC): " + el.dataset.estado

        menu.classList.add("ativo")

    })

})

function fecharMenu() {
    menu.classList.remove("ativo")

    elementos.forEach(e => {
        e.classList.remove("ativo")
        e.classList.remove("destacado")
    })
}

document.addEventListener("click", function (event) {

    let clicouNoMenu = menu.contains(event.target)
    let clicouNoElemento = event.target.closest(".table-elemento")

    if (!clicouNoMenu && !clicouNoElemento) {
        fecharMenu()
    }

})