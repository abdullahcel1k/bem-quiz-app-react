import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Table from "../../../components/Table";
import { AdminQuizModel } from "../../../utils/forms/admin-quiz/initialModel";
import { AdminQuizValidationScheme } from "../../../utils/forms/admin-quiz/validationScheme";
import { FaPlusCircle, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import FileUploader from "../../../components/FileUploader";
import { Delete, Get, Post } from "../../../utils/helpers/requestHelpers";

const AdminQuiz = () => {
  const [data, setData] = useState([]);
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Sınav Resmi",
        accessor: "imgSource",
        Cell: (props) => (
          <img
            src={process.env.REACT_APP_FILE_URL + props.value}
            width="100"
            height="100"
          />
        ),
      },
      {
        Header: "Sınav Adı",
        accessor: "name",
      },
      {
        Header: "Toplam Soru",
        accessor: "questions.length",
      },
      {
        Header: "",
        accessor: "edit",
        Cell: (props) => (
          <>
            <div className="d-flex float-end">
              <Link
                className="btn btn-info"
                to={"/admin/quiz/" + props.row.values.id}
              >
                <FaPlusCircle />
              </Link>
              <button className="btn btn-warning ms-3">
                <FaEdit />
              </button>
              <button
                className="btn btn-danger ms-3"
                onClick={() => {
                  _deleteQuiz(props.row.values.id);
                }}
              >
                <FaTrashAlt />
              </button>
            </div>
          </>
        ),
        maxWidth: 70,
        minWidth: 50,
        width: 60,
      },
    ],
    []
  );

  const fetchExams = async () => {
    let result = await Get("Exams");
    if (result.isSuccess) setData(result.data);
  };

  const saveExam = async (reqBody) => {
    const result = await Post("Exams", reqBody);
    if (result.isSuccess) {
      document.querySelector("[data-bs-dismiss]").click();
      fetchExams();
    }
  };

  const _deleteQuiz = async (id) => {
    const result = await Delete("Exams/" + id);
    if (result.isSuccess) {
      fetchExams();
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  return (
    <div className="row">
      <div className="col-12 mt-5">
        <button
          className="btn btn-md btn-success float-end"
          data-bs-toggle="modal"
          data-bs-target="#quizFormModal"
        >
          Yeni Sınav Ekle
        </button>
      </div>
      <div className="col-12 mt-5">
        <Table columns={columns} data={data} />
      </div>

      <div
        className="modal fade"
        id="quizFormModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="quizFormModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="quizFormModalLabel">
                Sınav Ekle
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <Formik
              initialValues={AdminQuizModel}
              validationSchema={AdminQuizValidationScheme}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                saveExam(values);
                resetForm({ values: AdminQuizModel });
              }}
            >
              {({
                isSubmitting,
                handleSubmit,
                errors,
                touched,
                handleChange,
                setFieldValue,
              }) => (
                <Form>
                  <div className="modal-body">
                    <div className="mb-3">
                      <FileUploader
                        id="imgSource"
                        label="Image"
                        fieldName="imgSource"
                        setFieldValue={setFieldValue}
                      />
                      {errors.image && touched.image ? (
                        <small>{errors.image}</small>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Sınav Adı</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        className="form-control"
                      />
                      {errors.name && touched.name ? (
                        <small>{errors.name}</small>
                      ) : null}
                    </div>
                    <div className="">
                      <label className="form-label">Açıklama</label>
                      <textarea
                        name="description"
                        onChange={handleChange}
                        className="form-control"
                      ></textarea>
                    </div>
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
  );
};

export default AdminQuiz;
