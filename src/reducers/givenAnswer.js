

const reducer = (state = null, action = {}) => {
    switch (action.type) {
        case 'GIVEN_ANSWER':
            return [
                ...action.payload
            ]
        default:
            return state
      }
  }

export default reducer