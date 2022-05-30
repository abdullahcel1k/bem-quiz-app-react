import axios from "axios";
import { ResponseModel } from "./responseModel";
import { errorToast } from "./toastHelper";

const API = process.env.REACT_APP_API_URL;

const defaultHeaders = {
  "Content-Type": "application/json",
};
const exceptionHandler = (err) => {
  if (err.response.data) {
    const { data, isSuccess, message } = err.response.data;
    errorToast(message);
    return new ResponseModel(data, isSuccess, message);
  }

  errorToast("Beklenmedik bir hata oluştu!");
  return new ResponseModel(null, false, "Beklenmedik bir hata oluştu!");
};

const Get = (url, headers) => {
  return axios
    .get(API + url, {
      headers: headers ? { ...defaultHeaders, ...headers } : defaultHeaders,
    })
    .then((response) => {
      const { isSuccess, data, message } = response.data;
      if (isSuccess) {
        return new ResponseModel(data, isSuccess, message);
      } else {
        errorToast(message);
      }
    })
    .catch((err) => {
      return exceptionHandler(err);
    });
};

const Post = (url, reqBody, headers) => {
  return axios
    .post(API + url, reqBody, {
      headers: headers ? { ...defaultHeaders, ...headers } : defaultHeaders,
    })
    .then((response) => {
      const { isSuccess, data, message } = response.data;
      if (isSuccess) {
        return new ResponseModel(data, isSuccess, message);
      } else {
        errorToast(message);
      }
    })
    .catch((err) => {
      return exceptionHandler(err);
    });
};

const Put = (url, reqBody, headers) => {
  return axios
    .put(API + url, reqBody, {
      headers: headers ? { ...defaultHeaders, ...headers } : defaultHeaders,
    })
    .then((response) => {
      const { isSuccess, data, message } = response.data;
      if (isSuccess) {
        return new ResponseModel(data, isSuccess, message);
      } else {
        errorToast(message);
      }
    })
    .catch((err) => {
      return exceptionHandler(err);
    });
};

const Delete = (url, headers) => {
  return axios
    .delete(API + url, {
      headers: headers ? { ...defaultHeaders, ...headers } : defaultHeaders,
    })
    .then((response) => {
      const { isSuccess, data, message } = response.data;
      if (isSuccess) {
        return new ResponseModel(data, isSuccess, message);
      } else {
        errorToast(message);
      }
    })
    .catch((err) => {
      return exceptionHandler(err);
    });
};

export { Get, Post, Put, Delete };
