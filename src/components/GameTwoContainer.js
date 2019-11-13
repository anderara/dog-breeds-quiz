import React, {Component} from 'react'
import GameTwo from './GameTwo'
import { connect } from 'react-redux'
import { startGameTwo } from '../actions/api'

class GameTwoContainer extends Component{
    
  componentDidMount() {
        this.props.startGameTwo()
    }
  
    render() {
        return(
            <div>
                <GameTwo
                randomDogsImages = {this.props.randomDogsImages} 
                actualBreedsDisplayed = {this.props.actualBreedsDisplayed}       
                />
            </div> 
        )
    }
}
   
const mapStateToProps = (state) => {
  const [game] = state.gameTwo
  if (game) return {
        randomDogsImages: game.images,
        actualBreedsDisplayed: game.breeds
    }
}
   
export default connect(mapStateToProps, {startGameTwo})(GameTwoContainer)
    