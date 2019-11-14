const reducer = (state = null, action = {}) => {
    switch (action.type) {
        case 'UPCOMING_ANSWER':
            return null;
        case 'WRONG_ANSWER':
            return false;
        case 'CORRECT_ANSWER':
            return true;
        default:
            return state
    }
}

export default reducer