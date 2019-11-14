import React, {Component} from 'react'
import { FaRegFrown } from 'react-icons/fa'
import { connect } from 'react-redux'

class WrongAnswerGameOne extends Component {
    render() {
        if(!this.props.answerGame) return "Loading"
        
        let breed = this.props.answerGame.split("/")
        breed = breed[4]

    return (
        <div>
            <br/>
            <h1> <FaRegFrown /> </h1>
            <h2> Wrong answer! </h2>
            <br/>
            <h3>This is a {breed}!</h3>
            <img id={this.props.answerGame} src={this.props.answerGame} width="280" height="230" alt=""/>            
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