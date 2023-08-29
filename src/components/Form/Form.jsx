import { Formik, Field, Form } from 'formik';

export const UserForm = ({ addName }) => {
  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={values => {
          addName([values.name,' ', values.number]);
             
            }
        }
      >
        <Form>
        <Field name='name' type='text'></Field>
        <Field name='number' type='tel'></Field>
        <button type="submit">Add contact</button>
      </Form>
      </Formik>
      
    </div>
  );
};
