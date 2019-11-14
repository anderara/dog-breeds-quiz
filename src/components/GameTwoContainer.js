import React, {Component} from 'react'
import GameTwo from './GameTwo'
import CorrectAnswer from './CorrectAnswer'
import WrongAnswerGameOne from './WrongAnswerGameOne'
import { connect } from 'react-redux'
import { startGame } from '../actions/api'

class GameTwoContainer extends Component{
    
  componentDidMount() {
    this.props.startGame()
  }
  
  render() {
    return(

      <div>
        {(this.props.givenAnswer === null)?
          <GameTwo
          randomDogsImages = {this.props.randomDogsImages} 
          actualBreedsDisplayed = {this.props.actualBreedsDisplayed}       
          />

        :(this.props.givenAnswer === true)?
          <CorrectAnswer/>
        :
          <WrongAnswerGameOne/>          
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
   
export default connect(mapStateToProps, {startGame})(GameTwoContainer)
    