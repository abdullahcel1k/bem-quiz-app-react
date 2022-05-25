import { FieldArray, Form, Formik, useFormikContext } from "formik";
import React from "react";
import { useParams } from "react-router-dom";

const QuizDetail = () => {
  const { id } = useParams();

  let answerObject = { text: "", isCorrect: false };

  const Answers = ({ answersArrayHelpers }) => {
    const { values } = useFormikContext();

    const handleAddAnswer = (answer) => {
      answersArrayHelpers.push(answer);
    };

    return (
      <>
        <Formik
          initialValues={answerObject}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleAddAnswer(values);
          }}
        >
          {({ isSubmitting, handleSubmit, errors, touched, handleChange }) => (
            <Form>
              {values.answers.map((contact, index) => (
                <div key={contact.answer + index}>
                  {". " + contact.answer}
                  <br />
                </div>
              ))}
              <input
                type="text"
                name="text"
                value={values.text}
                onChange={handleChange}
              />
              <input
                type="checkbox"
                name="isCorrect"
                value={values.isCorrect}
                onChange={handleChange}
              />
              <button type="button" onClick={handleSubmit}>
                Cevabı Ekle
              </button>
            </Form>
          )}
        </Formik>
      </>
    );
  };

  const Question = ({ values, handleChange }) => {
    return (
      <>
        <input
          type="text"
          name="question"
          value={values.question}
          onChange={handleChange}
        />
        <div key={values.question}>
          <br />
          <span>{values.question}'s answers:</span>
          <FieldArray name={`answers`}>
            {(arrayHelpers) => (
              <>
                <br />
                <Answers answersArrayHelpers={arrayHelpers} />
              </>
            )}
          </FieldArray>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="row">
        <div className="col-12 mt-5">
          <button
            className="btn btn-success float-end"
            data-bs-toggle="modal"
            data-bs-target="#questionFormModal"
          >
            Soru Ekle
          </button>
        </div>
        <div
          class="modal fade"
          id="questionFormModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="questionFormModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="questionFormModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <Formik
                initialValues={{ question: "", answers: [] }}
                enableReinitialize={true}
              >
                {({ values, handleChange }) => (
                  <Form
                    onChange={(event) => {
                      console.log(
                        "name",
                        event.target.name,
                        " | value",
                        event.target.value
                      );
                    }}
                  >
                    <div class="modal-body">
                      <Question values={values} handleChange={handleChange} />
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" class="btn btn-primary">
                        Kaydet
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizDetail;
