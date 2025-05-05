type Procedure = (...args: any[]) => void;

const debounce = <F extends Procedure>(
  func: F,
  delay: number
): ((...args: Parameters<F>) => void) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<F>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default debounce;