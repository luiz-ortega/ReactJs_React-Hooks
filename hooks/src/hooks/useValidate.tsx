const useValidate = <T extends Record<keyof T, any> = {}>(data: {
  data: { name: string };
}) => {
  if (data?.data?.name?.length > 3)
    return { ...data, data: { name: data.data.name.slice(0, 3) } };

  return data;
};

export default useValidate;
