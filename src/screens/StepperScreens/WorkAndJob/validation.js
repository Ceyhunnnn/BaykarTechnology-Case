import {object, string} from 'yup';

export const workAndJobInitialValues = {
  workType: '',
  jobType: '',
};

export const workAndJobFormValidate = object({
  workType: string().required('Lütfen çalışma durumunuzu seçiniz'),
  jobType: string().required('Lütfen mesleğinizi seçiniz'),
});
