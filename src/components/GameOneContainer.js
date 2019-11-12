import React, {Component} from 'react'
// import request from 'superagent'
import GameOne from './GameOne'
import { connect } from 'react-redux'
import { startGameOne } from '../actions/api'

class GameOneContainer extends Component{
    
   componentDidMount() {
        this.props.startGameOne()
    }
   
    render() {
        return(
            <div>
                <GameOne
                randomDogsImages = {this.props.randomDogsImages} 
                actualBreedsDisplayed = {this.props.actualBreedsDisplayed}       
                />
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    const [game] = state.gameOne
    if (game) return {
        randomDogsImages: game.images,
        actualBreedsDisplayed: game.breeds
    }

    return {}
}

export default connect(mapStateToProps, {startGameOne})(GameOneContainer)