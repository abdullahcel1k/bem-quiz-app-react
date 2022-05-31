import React, { useEffect, useState } from "react";
import QuizCart from "../components/QuizCart";
import { Get } from "../utils/helpers/requestHelpers";

const Home = () => {
  const [exams, setExams] = useState([]);

  const getExams = async () => {
    const result = await Get("Exams");
    if (result.isSuccess) setExams(result.data);
  };

  const createCards = () => {
    return exams.map((item, index) => {
      return <QuizCart key={index} quiz={item} />;
    });
  };

  useEffect(() => {
    getExams();
  }, []);

  return (
    <div className="row mt-5">
      <h1 className="text-center mb-5">Girebileceğiniz Sınavlar</h1>
      {createCards()}
    </div>
  );
};

export default Home;
