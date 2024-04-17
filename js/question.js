import {questions} from './data.js'

const progressValueEl = document.querySelector('.value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

//MBTI 타입 결과
let mbti = ""

// 선택 버튼에 EventListener를 달아둔다
choice1El.addEventListener('click', function(){
    // console.log("첫번째 단추가 눌렸습니다.")
    nextQuestion(0)
})

choice2El.addEventListener('click', function(){
    // console.log("두번째 단추가 눌렸습니다.")
    nextQuestion(1)
})

let currentNumber = 0

function renderQuestion(){
    const question = questions[currentNumber]
    numberEl.innerHTML = question.number
    questionEl.innerHTML = question.question
    choice1El.innerHTML = question.choices[0].text
    choice2El.innerHTML = question.choices[1].text
}

function nextQuestion(choiceNumber){

    const question = questions[currentNumber]

    if(currentNumber === questions.length - 1){
        //결과 페이지 보이기
        showResultPage(mbti)
        return
    }
    // 해당 MBTI 타입을 불러와야 함
    mbti += question.choices[choiceNumber].value 
    console.log(mbti)

    currentNumber++
    progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
    renderQuestion()
}

function showResultPage(mbti){
    // http://127.0.0.1:5500/result.html?mbti=istj
    location.href = './result.html?mbti=' + mbti
}

renderQuestion()