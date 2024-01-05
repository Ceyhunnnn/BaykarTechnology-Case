import {object, string} from 'yup';

export const personalFormInitialValues = {
  photo: '',
  name: '',
  surname: '',
  country: '',
  identity: '',
  phone: '',
  date: '',
  gender: '',
};

export const personalFormValidate = object({
  photo: string().required('Lütfen Profil fotoğrafı seçin.'),
  name: string()
    .min(3, 'En az 3 karakterden oluşmaktadır')
    .max(15, 'En fazla 15 karakter değer girebilirsiniz')
    .required('Bu alan boş bırakılamaz'),
  surname: string()
    .min(3, 'En az 3 karakterden oluşmaktadır')
    .max(15, 'En fazla 15 karakter değer girebilirsiniz')
    .required('Bu alan boş bırakılamaz'),
  country: string().required('Bu alan boş bırakılamaz'),
  city: string().required('Bu alan boş bırakılamaz'),
  identity: string().required('Bu alan boş bırakılamaz'),
  phone: string().required('Bu alan boş bırakılamaz'),
  date: string().required('Bu alan boş bırakılamaz'),
  gender: string().required('Bu alan boş bırakılamaz'),
});
