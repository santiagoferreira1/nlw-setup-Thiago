const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString().slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia ja incluso. ❌")
    return
  }
  alert("Dia adicionado com sucesso. ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("habitoDoDia", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("habitoDoDia")) || {}
nlwSetup.setData(data)
nlwSetup.load()
