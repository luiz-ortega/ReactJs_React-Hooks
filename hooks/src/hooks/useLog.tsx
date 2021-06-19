const useLog = <T extends Record<keyof T, any> = {}>(data: {
  data: { name: string };
}) => {
  console.log(data?.data?.name);

  return data;
};

export default useLog;
