import { startGame } from './api'

const HALF_A_SECOND = 500
const ONE_THIRD_OF_A_SECOND = 333
const TWO_SECONDS = 2000
const ONE_AND_A_HALF_SECOND = 1500

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

export const ANSWER_GAME = 'ANSWER_GAME'
export const answerGame = (correctUrl) => {
	return (dispatch) => {
        dispatch({
        type: ANSWER_GAME,
        payload: correctUrl
        })
	}
}

export const isItCorrect = (answer, correctUrl) => {
    return async (dispatch, getState) => {
        if (answer>0) {
            dispatch(correctAnswer())
            await sleep(HALF_A_SECOND)
            dispatch(startGame())
            await sleep(ONE_AND_A_HALF_SECOND)
            dispatch(upcomingAnswer())
        } else {
            dispatch(answerGame(correctUrl))
            dispatch(wrongAnswer())
            await sleep(TWO_SECONDS)
            dispatch(startGame())
            await sleep(HALF_A_SECOND)
            dispatch(upcomingAnswer())
        }
    }
}