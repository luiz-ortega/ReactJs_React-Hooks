import { useState } from "react";

const useForm = <T extends Record<keyof T, any> = {}>(initialValues: T) => {
  const [data, setData] = useState<T>(initialValues);

  return { data, setData };
};

export default useForm;
