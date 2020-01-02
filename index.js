const btn = document.getElementById("login")
const form = document.getElementById("login-form")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value
    const phone = document.getElementById("number").value
    const pass = document.getElementById("password").value
    console.log(email, phone, pass)
    form.reset()



})