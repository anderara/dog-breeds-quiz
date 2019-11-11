import React, {Component} from 'react'
import request from 'superagent'
import GameTwo from './GameTwo'
import { connect } from 'react-redux'
 
class GameTwoContainer extends Component{
 
   GetQuestions = () => {
        request('https://dog.ceo/api/breeds/image/random/3')
        .then(response => {
        const randomThree = Object(response.body.message)
        const doggy = randomThree.map(url => {
            let str = url
            let result = str.split("/") 
            return result[4]
           
        })
        this.props.dispatch({ 
            type: 'SET_DOG_QUESTION',
            payload: [{
                question : randomThree,
                answers : doggy
            }]
        })
      })
      .catch(console.error)
    }
      render() {
        if (!this.props.gameTwo[0]){
            this.GetQuestions()
            return "Loading..."
        } 
       
       
        return <GameTwo randomDogs = {this.props.gameTwo} />
      }
    }
    const mapStateToProps = (state) => {
        return {
            gameTwo: state.gameTwo, 
        }
        
    }

    export default connect(mapStateToProps)(GameTwoContainer)
    