export default (func, delay) => {
  let timeout = null;

  function cancel() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  }

  function debounced() {
    const context = this;
    const args = arguments;
    cancel();
    timeout = setTimeout(() => func.apply(context, args), delay);
  }
  debounced.cancel = cancel;
  return debounced;
};
