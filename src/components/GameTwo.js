import React, {Component} from 'react'
import { isItCorrect } from '../actions/answer'
import { connect } from 'react-redux'

class GameTwo extends Component {
    render() {
        if(!this.props.randomDogsImages) return "Loading"
        if(!this.props.actualBreedsDisplayed) return "Loading"

        const arrayUrls =  this.props.randomDogsImages
        const arrayBreeds = this.props.actualBreedsDisplayed
        const displayedPicture = arrayUrls[Math.floor(Math.random()*arrayUrls.length)]

        const Handleclick = (event) =>{
            const chosenBreed = event.target.value
            const answer = displayedPicture.search(chosenBreed)

            this.props.isItCorrect(answer, displayedPicture)
        }

    return (
        <div>
            <h2>Game #1</h2>
            <p>Please select the breed of the dog below</p>
            <img id={displayedPicture} src={displayedPicture} width="330" height="270" alt=""/>

            <div>
                <ul>
                    {arrayBreeds.length > 0
                        ? arrayBreeds.map(breed =>
                            <button key={breed} value={breed} onClick={Handleclick}>{breed}</button>
                        )
                        :'loading...'
                    }
                </ul>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {}
}

export default connect(mapStateToProps, { isItCorrect })(GameTwo)