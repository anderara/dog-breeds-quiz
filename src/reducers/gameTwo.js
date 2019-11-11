const reducer = (state = [], action = {}) => {
    switch (action.type) {
      case "SET_DOG_QUESTION":
        return [
          ...state,
          ...action.payload
        ]
      default:
        return state
      }
    }
  

    export default reducer
    