import React, {Component} from 'react'
import { FaRegFrown } from 'react-icons/fa'
import { connect } from 'react-redux'

class WrongAnswerGameOne extends Component {
    render() {
        // if(!this.props.randomDogsImages) return "Loading"
        // if(!this.props.correctUrl) return "Loading"

        console.log('correct url', this.props.answerGame)

        // const arrayUrls =  this.props.randomDogsImages
        // const arrayBreeds = this.props.actualBreedsDisplayed
        // const displayedPicture = arrayUrls[Math.floor(Math.random()*arrayUrls.length)]


    return (
        <div>
            <br/>
            <h1> <FaRegFrown /> </h1>
            <h2> Wrong answer! </h2>
            <br/>
            <h3>This is a ... !</h3>
            <img id={this.props.answerGame} src={this.props.answerGame} width="300" height="250" alt=""/>            
        </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
        answerGame: state.answerGame,
    }
}

export default connect(mapStateToProps)(WrongAnswerGameOne)