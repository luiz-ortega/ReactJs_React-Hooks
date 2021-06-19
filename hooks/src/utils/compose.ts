export function compose(...fns: any) {
  return function (valor: any) {
    return fns.reduce((acc: any, fn: Function) => {
      return fn(acc);
    }, valor);
  };
}
