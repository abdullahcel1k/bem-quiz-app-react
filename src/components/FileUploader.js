import axios from "axios";
import React, { useState } from "react";

const FileUploader = ({ id, label, fieldName, setFieldValue }) => {
  const FileApiUrl = "https://localhost:7110/api/files";

  const _uploadFile = (files) => {
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    axios({
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
      url: FileApiUrl,
    })
      .then((res) => {
        setFieldValue(fieldName, res.data.data);
      })
      .catch((err) => {
        // TODO : hata mesajlarını genelleştirmek için module haline getirilecek
      });
  };
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type="file"
        className="form-control"
        id={id}
        onChange={(e) => {
          _uploadFile(e.target.files);
        }}
      />
    </>
  );
};

export default FileUploader;
