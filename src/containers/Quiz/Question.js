import React, { useState } from "react";
import { errorToast } from "../../utils/helpers/toastHelper";

const Question = ({ question, nextQuestion }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const selectChoice = (answerId) => {
    setSelectedChoice(answerId);
  };
  return (
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
                className={`quiz__answers-answer ${
                  answer.id == selectedChoice ? "selected" : ""
                }`}
                onClick={() => {
                  selectChoice(answer.id);
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
            if (selectedChoice) nextQuestion();
            else errorToast("Lütfen bir cevap seçiniz");
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Question;
