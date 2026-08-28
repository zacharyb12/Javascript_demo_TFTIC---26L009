const app = document.querySelector("#app")

const btn = document.querySelector("#btn")


btn.addEventListener('click',()=> {
getData()
})

function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
    console.log(data)
    createPage(data)
    }
    )
}

function insertData(){

}

function createPage(data){
let ul = document.createElement("ul")

data.forEach(element => {
    let li = document.createElement("li")

    let p1 = document.createElement("p")
    p1.textContent = element.id
    p1.style.backgroundColor = "red"

    li.appendChild(p1)

    ul.appendChild(li)
});

app.appendChild(ul)

}