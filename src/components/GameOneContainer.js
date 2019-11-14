import React, {Component} from 'react'
import GameOne from './GameOne'
import CorrectAnswer from './CorrectAnswer'
import { connect } from 'react-redux'
import { startGame } from '../actions/api'

class GameOneContainer extends Component{
    
   componentDidMount() {
        this.props.startGame()
    }
   
    render() {
        return(

            <div>
              {(this.props.givenAnswer === null)?
                <GameOne
                randomDogsImages = {this.props.randomDogsImages} 
                actualBreedsDisplayed = {this.props.actualBreedsDisplayed}       
                />
    
              :(this.props.givenAnswer === true)?
                <CorrectAnswer/>
              :
                <h3>wrong answer!</h3>          
              }
            </div> 
    
        )
    }
}

const mapStateToProps = (state) => {

    const [game] = state.startGame
    if (game) return {
        randomDogsImages: game.images,
        actualBreedsDisplayed: game.breeds,
        givenAnswer: state.givenAnswer
    }
}

export default connect(mapStateToProps, {startGame})(GameOneContainer)