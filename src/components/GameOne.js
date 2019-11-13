import React, {Component} from 'react'
import { startGameOne } from '../actions/api'
import {wrongAnswer, correctAnswer, isItCorrect} from '../actions/answer'
import { connect } from 'react-redux'

class GameOne extends Component {

    render() {
    if(!this.props.randomDogsImages) return "Loading"
    if(!this.props.actualBreedsDisplayed) return "Loading"

    const arrayUrls =  this.props.randomDogsImages
    const arrayBreeds = this.props.actualBreedsDisplayed

    const correctBreed = arrayBreeds[Math.floor(Math.random()*arrayBreeds.length)]

    const Handleclick = (event) =>{
        const chosenPic = event.target.id
        const answer = chosenPic.search(correctBreed)

        this.props.isItCorrect(answer)

        // if (answer > 0) {
        //     alert("Congrats! Your answer is correct!")
        //     // this.props.startGameOne()
        //     this.props.correctAnswer()

        // } else {
        //     alert("Oh no! Try again!")
        //     this.props.wrongAnswer()
        // }
    }

   return (<div>
            <h2>Game Two</h2> <h2>your score: </h2>
            <p>Please select the picture displaying a: </p>
            <h3> {correctBreed} </h3>

            <div >
            <ul>
                {arrayUrls.length > 0
                    ? arrayUrls.map(image =>
                        <img id={image} onClick={Handleclick} src={image} width="330" height="270" alt=""/>
                    )
                    :'loading...'
                }
            </ul>
            </div>

      </div>)
}
}

const mapStateToProps = (state) => {
	return {}
}

export default connect(mapStateToProps, {startGameOne, wrongAnswer, correctAnswer, isItCorrect})(GameOne)