function createDebounceFunction(callback, delayTime) {
  let timeout;

  return function(...args) {
    clearTimeout(timeout);

    timeout = setTimeout(function() {
        callback.apply(this, args);
    }, delayTime);
  }
}