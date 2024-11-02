const list = document.querySelector("#todo-list")
const form = document.querySelector("#todo-form")

var todoList = [
    "Karachi",
    "Lahore",
    "Islamabad",
];

if (!localStorage.getItem("List")) {
    localStorage.setItem("List", JSON.stringify(todoList));

}
var todoList = JSON.parse(localStorage.getItem("List"));


form.addEventListener('submit', (event) => {
    event.preventDefault()

    const todo = event.target.children[0].value;

    var array = JSON.parse(localStorage.getItem("List"));
    
array.push(todo);
localStorage.setItem("List", JSON.stringify(array));

    list.innerHTML += `<li> ${todo} </li>`;

    if (todo === "") {
        alert("Enter a List")
    }
    event.target.reset();
})


// for (let i = 0; i < todoList.length; i++) {
// list.innerHTML += `<li> ${todoList[i]}</li>`  
// }

todoList.map(function (value) {
    list.innerHTML += `<li> ${value}</li>`
})

