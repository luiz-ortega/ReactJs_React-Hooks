import useForm from "./hooks/useForm";
import useLog from "./hooks/useLog";
import useValidate from "./hooks/useValidate";
import { compose } from "./utils/compose";

interface IInitialValues {
  name: string;
  email: string;
  number: number;
}

// type Key = keyof IInitialValues;

// let a:Key = 'email'

function Form() {
  const initialValues = {
    /* name: "", email: "", number: 0 */
  };
  // const { data, setData } = useForm(initialValues as IInitialValues);

  const composed = compose(
    useForm,
    useValidate,
    useLog
  )(initialValues as IInitialValues);

  return (
    <div>
      <pre>{JSON.stringify(composed.data, null, 2)}</pre>
      <input
        value={composed.data.name ? composed.data.name : ""}
        onChange={(e) =>
          composed.setData({ ...composed.data, name: e.currentTarget.value })
        }
      />
      <hr />

      {Object.keys(initialValues).map((key) => (
        <p>{key}</p>
      ))}
    </div>
  );
}

export default Form;
