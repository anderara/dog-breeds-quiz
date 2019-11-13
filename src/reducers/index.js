import { combineReducers } from 'redux'
import breeds from './breeds'
import breedImages from './breedImages'
import startGame from './startGame'
import gifsHomePage from './gifsHomePage'
import givenAnswer from './givenAnswer'
import answerGameOne from './answerGameOne'
import answerGameTwo from './answerGameTwo'


export default combineReducers ({
    breeds,
    breedImages,
    startGame,
    gifsHomePage,
    givenAnswer,
    answerGameOne,
    answerGameTwo
})