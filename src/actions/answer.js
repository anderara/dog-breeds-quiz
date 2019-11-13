
const HALF_A_SECOND = 500
const ONE_THIRD_OF_A_SECOND = 333
const TWO_SECONDS = 1600

const sleep = (duration) => new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration)
})

export const WRONG_ANSWER = 'WRONG_ANSWER'
export const wrongAnswer = () => {
	return ({
		type: WRONG_ANSWER
	})
}

export const CORRECT_ANSWER = 'CORRECT_ANSWER'
export const correctAnswer = () => {
	return ({
		type: CORRECT_ANSWER
	})
}

export const UPCOMING_ANSWER = 'UPCOMING_ANSWER'
export const upcomingAnswer = () => {
	return ({
		type: UPCOMING_ANSWER
	})
}

export const isItCorrect = (answer) => {
    return async (dispatch, getState) => {
        if (answer>0) {
            dispatch(correctAnswer())
            await sleep(ONE_THIRD_OF_A_SECOND)
            console.log('Correct answer')
            await sleep(TWO_SECONDS)
            dispatch(upcomingAnswer())
        } else {
            dispatch(wrongAnswer())
            await sleep(ONE_THIRD_OF_A_SECOND)
            console.log('Wrong answer')
            await sleep(TWO_SECONDS)
            dispatch(upcomingAnswer())
        }
    }
}
