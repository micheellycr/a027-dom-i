/* const frutas = ["laranja", "limão", "uva"];

let fruta1 = document.getElementById("fruta-1")
fruta1 += fruta1.innerHTML = frutas[0]

let fruta2 = document.getElementById("fruta-2")
fruta2 += fruta2.innerHTML = frutas[1]

let fruta3 = document.getElementById("fruta-3")
fruta3 += fruta3.innerHTML = frutas[2] */

const input = document.getElementById("fruta")
let fruta1 = document.getElementById("fruta-1")

function adicionaFruta() {
  fruta1.innerHTML = input.value
}
