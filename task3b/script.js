const quiz = [
{
question: "What does HTML stand for?",
options: [
"Hyper Text Markup Language",
"High Tech Modern Language",
"Home Tool Markup Language",
"Hyper Transfer Machine Language"
],
answer: 0
},
{
question: "Which language is used for styling?",
options: [
"HTML",
"Java",
"CSS",
"Python"
],
answer: 2
},
{
question: "Which language adds interactivity?",
options: [
"JavaScript",
"C",
"SQL",
"PHP"
],
answer: 0
}
];

let currentQuestion = 0;
let score = 0;

const questionEl =
document.getElementById("question");

const optionsEl =
document.getElementById("options");

const nextBtn =
document.getElementById("nextBtn");

function loadQuestion(){

let q = quiz[currentQuestion];

questionEl.innerText = q.question;

optionsEl.innerHTML = "";

q.options.forEach((option,index)=>{

let btn =
document.createElement("button");

btn.innerText = option;
btn.classList.add("option");

btn.onclick = function(){

if(index === q.answer){
score++;
}

nextBtn.style.display = "block";
};

optionsEl.appendChild(btn);

});

nextBtn.style.display = "none";
}

nextBtn.addEventListener("click",()=>{

currentQuestion++;

if(currentQuestion < quiz.length){
loadQuestion();
}
else{
document.querySelector(".container").innerHTML =
`<h1>Quiz Completed!</h1>
<h2>Your Score: ${score}/${quiz.length}</h2>`;
}

});

loadQuestion();