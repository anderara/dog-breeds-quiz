const score = 0

const reducer = (state = score, action = {}) => {
    switch (action.type) {
        case "SCORE":
            return action.payload
        default:
            return state
    }
}

export default reducer