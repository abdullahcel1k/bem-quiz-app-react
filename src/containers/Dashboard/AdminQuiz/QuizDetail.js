import React from "react";
import { useParams } from "react-router-dom";

const QuizDetail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div>
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
    </>
  );
};

export default QuizDetail;
