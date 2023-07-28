let name = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");
let form = document.querySelector("form");
let container = document.querySelector(".container")

name.focus();
let h1 = document.createElement("h1");
h1.innerText = "There will be no card"
h1.className = "mt-5 p-5 bg-body-secondary rounded-3 "
container.appendChild(h1)

number.addEventListener('input', () => {
    number.value = number.value.slice(0, 10);
})


const saveTodo = () => {
    if (number.value.length < 10) {
        alert('Please inter a valid number')
        number.focus();
    } else {
        let card = document.createElement("div");
        let onechar = name.value[0].toUpperCase();
        let nam = name.value.slice(1);
        name.value = onechar + nam
        card.className = "card"
        card.innerHTML = `<p>Name : ${name.value}</p>
                       <p>Email : ${email.value}</p>
                        <p>Contact no. : ${number.value}</p>
                        <span> 
                        <a href='//api.whatsapp.com/send?phone=+91${number.value}&text=Hii ${name.value}'target="_blank"title="Share on whatsapp"><img title="Whatsapp" src="whatsapp.jpg" alt=""></a>
                        <a href="tel:${"+91" + number.value}" ><img style="width: 25px;" title="Call" src="call.png" alt=""></a>
                        </span>
                        <button class="btn btn-danger w-100 mt-2">Delete</button>`
        document.getElementsByClassName("container")[0].appendChild(card)

        alert("Card added")
        form.reset();
        name.focus();
        h1.remove()
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    saveTodo();
})

container.addEventListener("click", (e) => {

    if (e.target.classList.contains("btn-danger")) {
        if (confirm("Are you sure")) {
            e.target.parentElement.remove();
        }
    }
    if (container.children.length == 0) {
        container.appendChild(h1)
    }
})

let btnn = document.getElementsByClassName("ms-5")[0]

btnn.addEventListener("click", (e) => {

    if (e.target.innerText.includes("Dark-Mode")) {
        document.body.style.backgroundColor = "gray"
        btnn.innerText = "Light-Mode"
    }
    else {
        btnn.innerText = "Dark-Mode"
        document.body.style.backgroundColor = "white"
    }
})



