

const quizDB=[
    {
        "question": "What does CSS stand for?",
        "a": "Cascading Style Sheets",
        "b": "Computer Style Sheets",
        "c": "Creative Style Sheets",
        "d": "Coded Style Sheets",
        "ans": "ans1"
      },
      {
        "question": "Who developed the Python programming language?",
        "a": "Guido van Rossum",
        "b": "Dennis Ritchie",
        "c": "James Gosling",
        "d": "Bjarne Stroustrup",
        "ans": "ans1"
      },
      {
        "question": "What is the capital of France?",
        "a": "Berlin",
        "b": "London",
        "c": "Paris",
        "d": "Rome",
        "ans": "ans3"
      },
      {
        "question": "Which of the following is not a JavaScript framework/library?",
        "a": "React",
        "b": "Angular",
        "c": "Vue",
        "d": "Java",
        "ans": "ans4"
      },
      {
        "question": "What year was the first iPhone released?",
        "a": "2005",
        "b": "2006",
        "c": "2007",
        "d": "2008",
        "ans": "ans3"
      }
                              
]
const question=document.querySelector('.Question')
const Option1=document.querySelector('#option1')
const Option2=document.querySelector('#option2')
const Option3=document.querySelector('#option3')
const Option4=document.querySelector('#option4')
const Submitt=document.querySelector('.btn')
let score=document.querySelector('.gaining')
const answers=document.querySelectorAll('.answer')
score;
let quetsionNo=0
const loadQuestion=()=>{
question.innerHTML=quizDB[quetsionNo].question
Option1.innerHTML=quizDB[quetsionNo].a
Option2.innerHTML=quizDB[quetsionNo].b
Option3.innerHTML=quizDB[quetsionNo].c
Option4.innerHTML=quizDB[quetsionNo].d
}

loadQuestion()

const GetcheckAns=()=>{
    let answer;
    answers.forEach((item)=>{
if(item.checked){
 answer=item.id
}
    });

    return answer
  
}

Submitt.addEventListener('click',()=>{
    const CheckAnswer=GetcheckAns()
    console.log(CheckAnswer);
    if(CheckAnswer===quizDB[quetsionNo].ans){
score++
    }
    quetsionNo++
 
if(quetsionNo<quizDB.length){
    loadQuestion()
}
else{
showScore.innerHTML=`<h1>YOUR SCORE ${score}+/+ ${quizDB.length}</h1>
<button class='btn' onclick='location.reload'>Play again</button>`;
showScore.classList.remove('gaining');
}
})

