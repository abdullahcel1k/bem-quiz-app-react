import { Form, Formik } from "formik";
import React from "react";
import {
  FaEdit,
  FaTrashAlt,
  FaCheckSquare,
  FaWindowClose,
} from "react-icons/fa";
import Table from "../../components/Table";

const User = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Ad Soyad",
        accessor: "fullName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Durum",
        accessor: "status",
        Cell: (props) =>
          props.row.values.status ? (
            <span className="badge bg-success">Onaylı</span>
          ) : (
            <>
              <span className="badge bg-danger">Onay Bekliyor</span>
              <button className="btn btn-sm">
                <FaCheckSquare className="fs-3 btn-success" />
              </button>
              <button className="btn btn-sm">
                <FaWindowClose className="fs-3 btn-danger" />
              </button>
            </>
          ),
      },
      {
        Header: "",
        accessor: "edit",
        Cell: (props) => (
          <>
            <div className="d-flex float-end">
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
      fullName: "Jhon Doe",
      email: "jhondoe@gmail.com",
      role: "Admin",
      status: true,
    },
    {
      id: 5,
      fullName: "Jhon Doe",
      email: "jhondoe@gmail.com",
      role: "User",
      status: true,
    },
    {
      id: 5,
      fullName: "Jhon Doe",
      email: "jhondoe@gmail.com",
      role: "User",
      status: false,
    },
    {
      id: 5,
      fullName: "Jhon Doe",
      email: "jhondoe@gmail.com",
      role: "User",
      status: false,
    },
    {
      id: 5,
      fullName: "Jhon Doe",
      email: "jhondoe@gmail.com",
      role: "User",
      status: false,
    },
    {
      id: 5,
      fullName: "Jhon Doe",
      email: "jhondoe@gmail.com",
      role: "User",
      status: false,
    },
    {
      id: 5,
      fullName: "Jhon Doe",
      email: "jhondoe@gmail.com",
      role: "User",
      status: false,
    },
    {
      id: 5,
      fullName: "Jhon Doe",
      email: "jhondoe@gmail.com",
      role: "User",
      status: false,
    },
  ];
  return (
    <div className="row">
      <div className="col-12 mt-5">
        <button
          className="btn btn-success float-end"
          data-bs-toggle="modal"
          data-bs-target="#userFormModal"
        >
          Kullanıcı Ekle
        </button>
      </div>
      <div className="col-12 mt-5">
        <Table columns={columns} data={data} />
      </div>

      <div
        class="modal fade"
        id="userFormModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="userFormModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="userFormModalLabel">
                Kullanıcı Ekle
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <Formik
              initialValues={{ fullName: "", email: "", role: null }}
              enableReinitialize={true}
            >
              {({ values, handleChange }) => (
                <Form>
                  <div class="modal-body">
                    <div class="mb-3">
                      <label class="form-label">Ad Soyad</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Email</label>
                      <input type="email" class="form-control" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Yetki</label>
                      <select className="form-select">
                        <option value={-1}>Lütfen bir yetki seçin</option>
                        <option value={0}>Kullanıcı</option>
                        <option value={1}>Admin</option>
                      </select>
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

export default User;
