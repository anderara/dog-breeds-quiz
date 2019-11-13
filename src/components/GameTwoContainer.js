import React, {Component} from 'react'
import GameTwo from './GameTwo'
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
            <h3>correct answer!</h3>
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
   
export default connect(mapStateToProps, {startGame})(GameTwoContainer)
    