import * as yup from "yup";
import { ValidationMessages } from "../../enums/validation-enums/validationMessage";

export const AdminQuizValidationScheme = yup.object().shape({
  imgSource: yup.string().required(ValidationMessages.REQUIRED),
  name: yup.string().required(ValidationMessages.REQUIRED),
});
