const reducer = (state = [], action = {}) => {
      switch (action.type) {
        case "SET_DOGS":
            return [
            ...state,
            ...action.payload
            ]
        default:
            return state
        }
    }

export default reducer