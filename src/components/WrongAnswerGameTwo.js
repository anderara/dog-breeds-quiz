import React, {Component} from 'react'
import { FaRegFrown } from 'react-icons/fa'
import { connect } from 'react-redux'

class WrongAnswerGameTwo extends Component {
    render() {
        if(!this.props.answerGame) return "Loading"
        const breed = this.props.answerGame
        const arrayOfImages = this.props.arrayOfImages

        let url = arrayOfImages.filter(image => {
            if(image.includes(breed)){
                return image
            }
        })
        url = url[0]

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
            <img id={url} src={url} width="280" height="230" alt=""/>            
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    const [game] = state.startGame
	if (game) return {
        answerGame: state.answerGame,
        arrayOfImages: game.images
    }
}

export default connect(mapStateToProps)(WrongAnswerGameTwo)