const list = document.querySelector("#todo-list")
const form = document.querySelector("#todo-form")


form.addEventListener('submit',(event)=>{
    event.preventDefault()

    const todo = event.target.children[0].value;

    list.innerHTML += `<li> ${todo} </li>`;

    if (todo === "") {
       alert("Enter a List")
       
    }

  
    event.target.reset();

}) 

const todoList = [
    "Karachi",
    "Lahore",
    "Islamabad",
];

// for (let i = 0; i < todoList.length; i++) {
    // list.innerHTML += `<li> ${todoList[i]}</li>`  
// }

todoList.map(function (value) {
    list.innerHTML += `<li> ${value}</li>`
})