export function prevent(callback) {
    return function(event) {
      event.preventDefault();
      return callback.call(this, event)
    }
  }