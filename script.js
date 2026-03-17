let elementos = document.querySelectorAll(".table-elemento")

let menu = document.getElementById("menu")

let nome = document.getElementById("nome")
let numero = document.getElementById("numero")
let classificacao = document.getElementById("classificacao")
let massa = document.getElementById("massa")

elementos.forEach(el => {

    el.addEventListener("click", () => {

        elementos.forEach(e => {
            e.classList.remove("ativo")
        })

        el.classList.add("ativo")

        nome.innerText = el.dataset.nome
        classificacao.innerText = "Classificação: " + el.dataset.classificacao
        numero.innerText = el.dataset.numero
        massa.innerText = el.dataset.massa
        estado.innerText = el.dataset.estado

        menu.classList.add("ativo")

    })

})

function fecharMenu() {
    menu.classList.remove("ativo")

    elementos.forEach(e => {
        e.classList.remove("ativo")
    })
}

document.addEventListener("click", function (event) {

    let clicouMenu = menu.contains(event.target)
    let clicouElemento = event.target.closest(".table-elemento")

    if (!clicouMenu && !clicouElemento) {
        fecharMenu()
    }

})