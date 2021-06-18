import useForm from "./hooks/useForm";

interface IInitialValues {
  name: string;
  email: string;
  number: number;
}

type Key = keyof IInitialValues;

// let a:Key = 'email'

function App() {
  const initialValues = {
    /* name: "", email: "", number: 0 */
  };
  const { data, setData } = useForm(initialValues as IInitialValues);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <input
        value={data.name ? data.name : ""}
        onChange={(e) => setData({ ...data, name: e.currentTarget.value })}
      />
      <hr />

      {Object.keys(initialValues).map((key) => (
        <p>{key}</p>
      ))}
    </div>
  );
}

export default App;
