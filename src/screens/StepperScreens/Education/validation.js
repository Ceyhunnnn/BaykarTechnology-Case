import {object, string} from 'yup';

export const educationInitialValues = {
  educationLevel: '',
  school: '',
  department: '',
  graduationYear: '',
  experienceList: [],
};

export const educationFormValidate = object({
  educationLevel: string().required('Lütfen eğitim seviyenizi seçiniz'),
  school: string().required('Lütfen okul adını giriniz'),
  department: string().required('Lütfen bölüm adını giriniz'),
  graduationYear: string().required('Lütfen Mezuniyet yılını giriniz'),
});
