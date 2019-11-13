import { START_GAME } from "../actions/api"

const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case START_GAME:
            return [
                ...action.payload
            ]
        default:
            return state
      }
  }

export default reducer