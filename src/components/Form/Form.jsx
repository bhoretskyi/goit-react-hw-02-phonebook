import { useFormik } from 'formik';
import { nanoid } from 'nanoid';

export const NameForm = ({ addContact }) => {
  const formik = useFormik({
    initialValues: { name: '' },
    onSubmit: values => {
      addContact(values.name);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Name
      <input id={nanoid()} name="name" onChange={formik.handleChange} />
      </label>
      <label>
        <input type="text" />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
