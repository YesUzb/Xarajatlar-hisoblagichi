alert("Xush kelibsiz")
var passBound = 9556983.2; 
var number = +prompt ("Sayohatga borishga qancha pulingiz bor yozing!")
var elText = document.querySelector(".js-text")

if (passBound <= number) {
    console.log("Sayohat uchun yetarlicha pulingiz bor mazza qilib dam olib keling.")
    elText.textContent = "Sayohat uchun yetarlicha pulingiz bor mazza qilib dam olib keling"
} else {
    console.log("Kechirasiz sizda yetarlicha mablag'ingiz yo'q Xohlasangiz shu pul bilan shuyerda ham dam olishingiz mumkin.")
    elText.textContent = "Kechirasiz sizda yetarlicha mablag'ingiz yo'q Xohlasangiz shu pul bilan shuyerda ham dam olishingiz mumkin."
}