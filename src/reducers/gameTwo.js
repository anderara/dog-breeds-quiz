const reducer = (state = [], action = {}) => {
    // console.log("this is the state",state, "this is the action",action)
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
    