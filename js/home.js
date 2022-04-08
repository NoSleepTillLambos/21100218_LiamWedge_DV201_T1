const QuizData = [
    {
        question: "Who has the most goals in the Premier League's history",
        a: "Alan Shearer",
        b: "Didier Drogba",
        c: "Mohamed Salah",
        d: "Dwayne Johnson",
        correct: "a",
    },
    {
        question: "Which English team has won the most Champions league titles",
        a: "Brentford",
        b: "Chelsea",
        c: "Manchester United",
        d: "Liverpool",
        correct: "d",
    },
    {
        question: "Which goalkeeper has the most clean sheets in premier league history",
        a: "David De Gea",
        b: "Aaron Ramsdale",
        c: "Petr Cech",
        d: "Harry Maguire",
        correct: "c",
    },
    {
        question: "Which English stadium is the largest in terms of capacity",
        a: "Old Trafford",
        b: "Wembley",
        c: "Emirates stadium",
        d: "Goodison park",
        correct: "b",
    }
];


const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')


// TEXT CHANGE QUESTIONS 
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

// LET ALL EQUAL ZERO AT BEGINNING 
let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = QuizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === QuizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < QuizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${QuizData.length} questions correctly</h2>

           <button onclick="location.reload()" id="reload">Reload quiz</button>
           `
       }
    }
})


$("#submit").mouseenter(function(){
    $(this).css("background-color", "green");
}),
$("#submit").mouseleave(function(){
    $(this).css("background-color", "#2b2b2b")
});

