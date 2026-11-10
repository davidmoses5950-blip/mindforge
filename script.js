let myButton = document.querySelector(".btn");
let myTitle = document.querySelector("#welcomeTitle");

// Check if Chrome don remember person before
let savedName = localStorage.getItem("myName");

if (savedName) {
    myTitle.textContent = "Welcome " + savedName + " to MindForge!";
}

myButton.addEventListener("click", function() {
    let name = prompt("What is your name?");
    // Save the name for next time!
    localStorage.setItem("myName", name);
    alert("Thank you " + name + "! Welcome to MindForge. Let's build something great!");
    myTitle.textContent = "Welcome " + name + " to MindForge!";
});