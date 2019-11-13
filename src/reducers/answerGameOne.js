const reducer = (state = '', action = {}) => {
    switch (action.type) {
        case "ANSWER_GAME_ONE":
            return action.payload
        default:
            return state
        }
    }

export default reducer