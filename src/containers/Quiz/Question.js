import React, { useState } from "react";
import { Get } from "../../utils/helpers/requestHelpers";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../../utils/helpers/toastHelper";

const Question = ({ question, nextQuestion, exam }) => {
  const navigate = useNavigate();
  const [selectedChoice, setSelectedChoice] = useState(null);
  const selectChoice = (answerId) => {
    setSelectedChoice(answerId);
  };

  const checkAnswer = async () => {
    const result = await Get("Exams/checkAnswer?answerId=" + selectedChoice);
    if (result.isSuccess) {
      successToast(result.message);
    }

    // eğer son soru ise sınav tamamlandı
    if (question.order == exam.questions[exam.questions.length - 1].order) {
      const completeAnswerResult = await Get(
        "Exams/completeExam?examId=" + exam.id
      );

      if (completeAnswerResult.isSuccess) {
        successToast(
          `Tebrikler toplam doğru sayınız : ${completeAnswerResult.data}, anasayfaya yönlendirliyorsunuz`
        );
      }

      setTimeout(() => {
        navigate("/");
      }, 5000);
    } else {
      nextQuestion();
    }
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
            if (selectedChoice) checkAnswer();
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
