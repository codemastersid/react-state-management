function reducer(count, action) {
  switch (action.type) {
    case "increment": {
      return count + 1;
    }
    case "big-increment": {
      return count + 10;
    }
    case "reset": {
      return action.initialVal;
    }
    case "randomize": {
      return action.value;
    }
    case "big-decrement": {
      return count - 10;
    }
    case "decrement": {
      return count - 1;
    }
  }
}

export default reducer;
