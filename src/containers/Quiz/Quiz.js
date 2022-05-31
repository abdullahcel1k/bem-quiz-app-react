import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Get } from "../../utils/helpers/requestHelpers";
import "./quiz.scss";

const Quiz = () => {
  const { slug } = useParams();
  const [question, setQuestion] = useState(null);

  const selectedChoice = () => {};

  const startExam = async () => {
    let query = "Exams/startExam?slug=" + slug;
    if (question) query += "&order=" + parseInt(question.order + 1);
    const result = await Get(query);
    if (result.isSuccess) setQuestion(result.data.questions[0]);
  };

  useEffect(() => {
    startExam();
  }, []);

  return question ? (
    <section className="quiz__container">
      <h3 className="quiz__title">Quiz Title</h3>
      <section className="quiz__body">
        <section className="quiz__page">
          <div id="quizPageBody">
            <div className="quiz__question">
              <h3>Question {question.order}</h3>
              <p>{question.label}</p>
            </div>
            <div className="quiz__answers">
              {question.answers.map((answer) => {
                return (
                  <div
                    className="quiz__answers-answer"
                    onClick={() => {
                      selectedChoice();
                    }}
                  >
                    {answer.text}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="quiz__navigation">
            <button className="navigation_btn" onclick="">
              Prev
            </button>
            <button
              className="navigation_btn ml-2"
              onClick={() => {
                startExam();
              }}
            >
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
            <div className="item done">
              <button>1</button>
            </div>
            <div className="item done">
              <button>2</button>
            </div>
            <div className="item done">
              <button>3</button>
            </div>
            <div className="item active">
              <button>34</button>
            </div>
            <div className="item">
              <button>13</button>
            </div>
          </div>
        </section>
      </section>
    </section>
  ) : null;
};

export default Quiz;
