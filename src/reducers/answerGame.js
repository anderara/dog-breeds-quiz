const reducer = (state = '', action = {}) => {
    switch (action.type) {
        case "ANSWER_GAME":
            return action.payload
        default:
            return state
        }
    }

export default reducer