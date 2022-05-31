import { FieldArray, Form, Formik, useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "../../../components/Table";
import { Get, Post } from "../../../utils/helpers/requestHelpers";

const QuizDetail = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);

  let answerObject = { text: "", isCorrect: false };

  const getQuestions = async () => {
    const result = await Get("Exams/getDetail/" + id);
    if (result.isSuccess) setQuestions(result.data.questions);
  };

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
              <div className="mb-3">
                <label className="form-label" for="isCorrectCbox">
                  Cevap Metni
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="text"
                  value={values.text}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="form-check">
                <input
                  id="isCorrectCbox"
                  className="form-check-input"
                  type="checkbox"
                  name="isCorrect"
                  value={values.isCorrect}
                  onChange={handleChange}
                />
                <label className="form-check-label" for="isCorrectCbox">
                  Doğru Cevap
                </label>
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Cevabı Ekle
              </button>

              <h3 className="mt-3">Cevaplar</h3>
              <hr className="line" />
              <ul className="list-group">
                {values.answers.map((answer, index) => (
                  <li
                    className={`list-group-item ${
                      answer.isCorrect ? "bg-success" : "bg-light"
                    }`}
                    key={answer + index}
                  >
                    {answer.text}
                  </li>
                ))}
              </ul>
            </Form>
          )}
        </Formik>
      </>
    );
  };

  const Question = ({ values, handleChange }) => {
    return (
      <>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Soru
          </label>
          <textarea
            type="text"
            className="form-control"
            name="label"
            value={values.label}
            onChange={handleChange}
          ></textarea>
        </div>
        <div key={values.label}>
          <br />
          <h3>Cevap Ekle</h3>
          <hr className="line" />
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

  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Soru Metni",
        accessor: "label",
      },
      {
        Header: "Cevap Sayısı",
        accessor: "answers.length",
      },
      {
        Header: "",
        accessor: "edit",
        Cell: () => {},
      },
    ],
    []
  );

  const _saveQuestion = async (reqBody) => {
    const result = await Post("Exams/" + id + "/addquestion", reqBody);
    console.log(result);
  };

  useEffect(() => {
    getQuestions();
  }, []);

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

        <div className="col-12 mt-5">
          <Table columns={columns} data={questions} />
        </div>
        <div
          className="modal fade"
          id="questionFormModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="questionFormModalLabel"
          aria-hidden="true"
        >
          <div className="modal-xl modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="questionFormModalLabel">
                  Sınav'a Soru Ekle
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <Formik
                initialValues={{ label: "", answers: [] }}
                enableReinitialize={true}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  _saveQuestion(values);
                }}
              >
                {({ values, handleChange }) => (
                  <Form>
                    <div className="modal-body">
                      <Question values={values} handleChange={handleChange} />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
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
