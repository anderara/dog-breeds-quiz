import { combineReducers } from 'redux'
import breeds from './breeds'
import breedImages from './breedImages'
import gameOne from './gameOne'
import gifsHomePage from './gifsHomePage'
import gameTwo from './gameTwo'
import score from './score'


export default combineReducers ({
    breeds,
    breedImages,
    gameOne,
    gifsHomePage,
    gameTwo,
    score

})