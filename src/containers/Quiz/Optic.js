import React from "react";

const Optic = ({ exam, order }) => {
  const opticClasGenerator = (questionOrder) => {
    if (questionOrder < order) return "done";
    else if ((questionOrder == order)) return "active";
    return "";
  };
  return (
    <>
      <section className="quiz__optic">
        <div className="quiz__optic-header">
          <span>
            Question {order}/{exam.questions.length}
          </span>
          <span>Need Help?</span>
        </div>
        <div className="quiz__optic-viewer">
          {exam.questions.map((question) => {
            return (
              <div className={`item ${opticClasGenerator(question.order)}`}>
                <button>{question.order}</button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Optic;
