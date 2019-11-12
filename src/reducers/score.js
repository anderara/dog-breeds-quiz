const score = 0

const reducer = (state = score, action = {}) => {
    switch (action.type) {
        case "SCORE":
            return score + 1
        default:
            return state
    }
}

export default reducer