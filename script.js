const quizData = [
    { question: "There are _____ level of heading in html",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        correct: "a",

    },
    {
        question: "Which of the following tags do not require a terminator?",
        a: "<u>",
        b: "<br>",
        c: "<b>",
        d: "None",
        correct: "b",


    },
    { question: "For a particular font its size attribute can be an absolute value ranging form?",
    a: "1-10",
    b: "4-5",
    c: "5-10",
    d: "6-12",
    correct: "a",


    },
    {
        question: "The Major components of the Web browser are ___",
        a: "Menu Bar",
        b: "Tool bar",
        c: "Location",
        d: "All",
        correct: "d",


    },
    {
        question: "Which of the following properties will we use to display border around a cell without any content ?",
        a: "empty-cell",
        b: "blank-cell",
        c: "void-cell",
        d: "None",
        correct: "c",

    }
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 1;
let score = 0
loadQuiz()

function loadQuiz(){

    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText= currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
}
function  deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected(){
    let answer 
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer= answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener(('click'), () => {
    const answer = getSelected()
    if(answer){
        if(answer===quizData[currentQuiz].correct){
          score++
        }
        currentQuiz++
        if(currentQuiz<quizData.length){
         loadQuiz()
        }
        else{
            quiz.innerHTML= `
            <h2>You answered correctly at ${score}/${quizData.length} questions</h2>
            <button onClick="location.reload()">Reload</button>`
        }
    }
} )