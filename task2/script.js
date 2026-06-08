// Contact Form Validation

document.getElementById("contactForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("email").value;

    let error =
        document.getElementById("error");

    if(name === "" || email === ""){
        error.innerHTML =
        "All fields are required!";
        return;
    }

    if(!email.includes("@")){
        error.innerHTML =
        "Enter valid email!";
        return;
    }

    error.innerHTML =
    "Form Submitted Successfully!";
});


// To-Do List

function addTask(){

    let taskInput =
        document.getElementById("taskInput");

    let task =
        taskInput.value;

    if(task === ""){
        return;
    }

    let li =
        document.createElement("li");

    li.innerHTML =
        task +
        ' <button onclick="this.parentElement.remove()">Delete</button>';

    document.getElementById("taskList")
    .appendChild(li);

    taskInput.value = "";
}