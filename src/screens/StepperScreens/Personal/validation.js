import {boolean, object, string} from 'yup';

export const personalFormInitialValues = {
  photo: '',
  name: '',
  surname: '',
  country: '',
  identity: '',
  phone: '',
  date: '',
  gender: '',
  check: false,
};

export const personalFormValidate = object({
  photo: string().required('Lütfen Profil fotoğrafı seçin.'),
  name: string()
    .min(3, 'En az 3 karakterden oluşmaktadır')
    .max(15, 'En fazla 15 karakter değer girebilirsiniz')
    .required('Lütfen adınızı giriniz'),
  surname: string()
    .min(3, 'En az 3 karakterden oluşmaktadır')
    .max(15, 'En fazla 15 karakter değer girebilirsiniz')
    .required('lütfen soyadınızı giriniz'),
  country: string().required('Lütfen ülkenizi seçiniz'),
  city: string().required('Lütfen şehrinizi seçiniz'),
  identity: string().required('Lütfen kimlik numaranızı giriniz'),
  phone: string().required('Lütfen telefon numaranızı giriniz'),
  date: string().required('Lütfen doğum tarihinizi giriniz'),
  gender: string().required('Lütfen cinsiyetinizi seçiniz'),
  check: boolean()
    .required('')
    .oneOf([true], 'Lütfen KVKK metnini onaylayınız'),
});
