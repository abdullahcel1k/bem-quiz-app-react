import React from 'react'
import { useParams } from 'react-router-dom';
import './quiz.scss'

const Quiz = () => {
  const { slug } = useParams();
  console.log(slug)

  const selectedChoice = () => { }
  return (
    <section class="quiz__container">
      <h3 class="quiz__title">Quiz Title</h3>
      <section class="quiz__body">
        <section class="quiz__page">
          <div id="quizPageBody">

            <div class="quiz__question">
              <h3>Question 1</h3>
              <p>
                Soru metini 1
              </p>
            </div>
            <div class="quiz__answers">
              <div class="quiz__answers-answer"
                onClick={() => { selectedChoice() }}>
                Cevap 1
              </div>
              <div class="quiz__answers-answer"
                onClick={() => { selectedChoice() }}>
                Cevap 2
              </div>
              <div class="quiz__answers-answer"
                onClick={() => { selectedChoice() }}>
                Cevap 3
              </div>
              <div class="quiz__answers-answer"
                onClick={() => { selectedChoice() }}>
                Cevap 4
              </div>
            </div >
          </div>

          <div class="quiz__navigation">
            <button class="navigation_btn" onclick="">Prev</button>
            <button class="navigation_btn ml-2" onclick="nextQuestion()">
              Next
            </button>
          </div>
        </section>
        <section class="quiz__optic">
          <div class="quiz__optic-header">
            <span>Question 1/8</span>
            <span>Need Help?</span>
          </div>
          <div class="quiz__optic-viewer">
            <div class="item done"><button>1</button></div>
            <div class="item done"><button>2</button></div>
            <div class="item done"><button>3</button></div>
            <div class="item active"><button>34</button></div>
            <div class="item"><button>13</button></div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Quiz