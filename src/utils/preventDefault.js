function preventDefault(callback) {
  return function(event) {
    event.preventDefault();
    return callback.call(this, event);
  };
}

export { preventDefault };
