localStorage.clear()
localStorage.setItem("data", JSON.stringify({}))

document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault()

    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const gender = document.getElementById("gender").value

    const formData = {
        name: name,
        age: age,
        gender: gender
    }

    const data = JSON.parse(localStorage.getItem("data"))
    data["userInfo"] = formData
    localStorage.setItem("data", JSON.stringify(data))

    setTimeout(() => {
        window.location.href = "task.html"
    }, 500)
    
})