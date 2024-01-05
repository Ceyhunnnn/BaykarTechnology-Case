import {boolean, object, string} from 'yup';

export const projectAndCVFormInitialValues = {
  cvDocument: '',
};

export const projectAndCVFormValidate = object({
  cvDocument: object().required("Lütfen CV'nizi yükleyiniz"),
});
