import {object, string} from 'yup';

export const loginValidation = object({
  name: string()
    .min(3, 'En az 3 karakterden oluşmaktadır')
    .max(15, 'En fazla 15 karakter değer girebilirsiniz')
    .required('Lütfen adınızı giriniz'),
  surname: string()
    .min(3, 'En az 3 karakterden oluşmaktadır')
    .max(15, 'En fazla 15 karakter değer girebilirsiniz')
    .required('Lütfen soyadınızı giriniz'),
});
