import { Router } from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universo", "/pages/universo.html")
router.add("/exploracao", "pages/exploracao.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

function exchangeClasse(go) {
  let body = document.querySelector("body")

  body.classList.remove("home")
  body.classList.remove("exploracao")
  body.classList.remove("universo")
  body.classList.add(go)
}

let universo = document.querySelector(".a-univer")
let exploracao = document.querySelector(".a-explo")
let home = document.querySelector(".a-home")

universo.addEventListener("click", () => {
  exchangeClasse("universo")
})

exploracao.addEventListener("click", () => {
  exchangeClasse("exploracao")
})

home.addEventListener("click", () => {
  exchangeClasse("home")
})
