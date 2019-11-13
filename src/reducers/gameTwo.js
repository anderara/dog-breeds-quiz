import { GAME_TWO } from "../actions/api"

const reducer = (state = [], action = {}) => {
    switch (action.type) {
      case GAME_TWO:
        return [
          ...action.payload
        ]
      default:
        return state
      }
    }
  
export default reducer
    