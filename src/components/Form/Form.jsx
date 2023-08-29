import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yap from 'yup';

const FindSchema = Yap.object().shape({
  name: Yap.string()
    .min(2, 'too short name')
    .matches(/^[A-Za-z\s]+$/, 'Invalid name format')
    .required('required'),
  number: Yap.string()
    .min(7, 'too short')
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Invalid phone number. Please use format XXX-XX-XX'
    )
    .required('required'),
});

export const UserForm = ({ addName }) => {
  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '', find: '' }}
        onSubmit={values => {

          addName({ name: values.name, number: values.number });
        }}
        validationSchema={FindSchema}
      >
        <Form>
          <label>
            Name
            <Field name="name" type="text"></Field>
            <ErrorMessage name="name" />
          </label>
          <label>
            Number
            <Field name="number" type="tel"></Field>
            <ErrorMessage name="number" />
          </label>

          <button type="submit">Add contact</button>
         
        </Form>
      </Formik>
    </div>
  );
};
