function useDebounce(func, timeout = 500){

  let timer;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };

}


export default useDebounce