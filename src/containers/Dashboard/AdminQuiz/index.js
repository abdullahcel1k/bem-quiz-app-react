import { Form, Formik } from "formik";
import React from "react";
import Table from "../../../components/Table";
import { AdminQuizModel } from "../../../utils/forms/admin-quiz/initialModel";
import { AdminQuizValidationScheme } from "../../../utils/forms/admin-quiz/validationScheme";
import { FaPlusCircle, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminQuiz = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Sınav Resmi",
        accessor: "quizImage",
        Cell: (props) => <img src={props.value} width="100" height="100" />,
      },
      {
        Header: "Sınav Adı",
        accessor: "quizName",
      },
      {
        Header: "Toplam Soru",
        accessor: "totalQuestion",
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
              <button className="btn btn-danger ms-3">
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

  const data = [
    {
      id: 5,
      quizImage: "/images/quiz.webp",
      quizName: "Sınav 1",
      totalQuestion: 9,
    },
    {
      id: 6,
      quizImage: "/images/quiz.webp",
      quizName: "Sınav 1",
      totalQuestion: 11,
    },

    {
      id: 3,
      quizImage: "/images/quiz.webp",
      quizName: "Sınav 1",
      totalQuestion: 16,
    },

    {
      id: 4,
      quizImage: "/images/quiz.webp",
      quizName: "Sınav 1",
      totalQuestion: 24,
    },

    {
      id: 1,
      quizImage: "/images/quiz.webp",
      quizName: "Sınav 1",
      totalQuestion: 21,
    },
  ];

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
        class="modal fade"
        id="quizFormModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="quizFormModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="quizFormModalLabel">
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
              initialValues={AdminQuizModel}
              validationSchema={AdminQuizValidationScheme}
              onSubmit={(values, { setSubmitting, resetForm }) => {}}
            >
              {({
                isSubmitting,
                handleSubmit,
                errors,
                touched,
                handleChange,
              }) => (
                <Form>
                  <div class="modal-body">
                    <div class="form-floating">
                      <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        class="form-control"
                        id="imageInput"
                      />
                      <label for="imageInput">Sınav Kapak Resmi</label>
                      {errors.image && touched.image ? (
                        <small>{errors.image}</small>
                      ) : null}
                    </div>
                    <div class="form-floating">
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        class="form-control"
                      />
                      <label>Sınav Adı</label>
                      {errors.name && touched.name ? (
                        <small>{errors.name}</small>
                      ) : null}
                    </div>
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
  );
};

export default AdminQuiz;
