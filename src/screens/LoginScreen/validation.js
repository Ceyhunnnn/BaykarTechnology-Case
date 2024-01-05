import {object, string} from 'yup';

export const loginValidation = object({
  name: string()
    .min(3, 'En az 3 karakterden oluşmaktadır')
    .max(15, 'En fazla 15 karakter değer girebilirsiniz')
    .required('Bu alan boş bırakılamaz'),
  surname: string()
    .min(3, 'En az 3 karakterden oluşmaktadır')
    .max(15, 'En fazla 15 karakter değer girebilirsiniz')
    .required('Bu alan boş bırakılamaz'),
});
