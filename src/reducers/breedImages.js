const reducer = (state = [], action = {}) => {
    switch (action.type) {
      case "BREED_IMAGES":
        // having state in the return adds the state (empty array) to the state
        //   return [
        //   state,
        //   ...action.payload
        //   ]
        return [...action.payload]
      default:
          return state
      }
  }

export default reducer