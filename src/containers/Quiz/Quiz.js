import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Get } from "../../utils/helpers/requestHelpers";
import Question from "./Question";
import Optic from "./Optic";
import "./quiz.scss";

const Quiz = () => {
  const params = new URLSearchParams(window.location.search);
  const [order, setOrder] = useState(params.get("order"));
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  const startExam = async () => {
    let query = "Exams/startExam?" + params.toString();
    const result = await Get(query);
    if (result.isSuccess) setData(result.data);
  };

  const nextQuestion = () => {
    const nextOrder = parseInt(order) + 1;
    setOrder(nextOrder);
    params.set("order", nextOrder);
    navigate("/quiz?" + params.toString());
  };

  useEffect(() => {
    startExam();
  }, [order]);

  return data ? (
    <section className="quiz__container">
      <h3 className="quiz__title">{data.exam.name}</h3>
      <section className="quiz__body">
        <Question question={data.question} nextQuestion={nextQuestion} />
        <Optic exam={data.exam} order={order} />
      </section>
    </section>
  ) : (
    <p>.....</p>
  );
};

export default Quiz;
