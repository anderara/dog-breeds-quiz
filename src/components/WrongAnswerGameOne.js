import React, {Component} from 'react'
import { FaRegFrown } from 'react-icons/fa'
import { connect } from 'react-redux'

class WrongAnswerGameOne extends Component {
    render() {
        if(!this.props.answerGame) return "Loading"
        
        let breed = this.props.answerGame.split("/")
        breed = breed[4]

        let article
        if (breed[0] === 'a' || breed[0] === 'e' || breed[0] === 'i' || breed[0] === 'o' || breed[0] === 'u'){
            article = 'an'
        }else{
            article = 'a'
        }

    return (
        <div>
            <br/>
            <h1> <FaRegFrown /> </h1>
            <h2> Wrong answer! </h2>
            <br/>
            <h3>This is {article} {breed}!</h3>
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