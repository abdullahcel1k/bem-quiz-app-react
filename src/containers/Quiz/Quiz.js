import React from 'react'
import { useParams } from 'react-router-dom';
import './quiz.scss'

const Quiz = () => {
  const { slug } = useParams();
  console.log(slug)

  const selectedChoice = () => { }
  return (
    <section className="quiz__container">
      <h3 className="quiz__title">Quiz Title</h3>
      <section className="quiz__body">
        <section className="quiz__page">
          <div id="quizPageBody">

            <div className="quiz__question">
              <h3>Question 1</h3>
              <p>
                Soru metini 1
              </p>
            </div>
            <div className="quiz__answers">
              <div className="quiz__answers-answer"
                onClick={() => { selectedChoice() }}>
                Cevap 1
              </div>
              <div className="quiz__answers-answer"
                onClick={() => { selectedChoice() }}>
                Cevap 2
              </div>
              <div className="quiz__answers-answer"
                onClick={() => { selectedChoice() }}>
                Cevap 3
              </div>
              <div className="quiz__answers-answer"
                onClick={() => { selectedChoice() }}>
                Cevap 4
              </div>
            </div >
          </div>

          <div className="quiz__navigation">
            <button className="navigation_btn" onclick="">Prev</button>
            <button className="navigation_btn ml-2" onclick="nextQuestion()">
              Next
            </button>
          </div>
        </section>
        <section className="quiz__optic">
          <div className="quiz__optic-header">
            <span>Question 1/8</span>
            <span>Need Help?</span>
          </div>
          <div className="quiz__optic-viewer">
            <div className="item done"><button>1</button></div>
            <div className="item done"><button>2</button></div>
            <div className="item done"><button>3</button></div>
            <div className="item active"><button>34</button></div>
            <div className="item"><button>13</button></div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Quiz