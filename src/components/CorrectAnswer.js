import React, {Component} from 'react'
import { FaCheckCircle } from 'react-icons/fa'

class CorrectAnswer extends Component {
  render() {
    return(
        <div>
            <br/>
            <h1> <FaCheckCircle /> </h1>
            <h3> Correct! </h3>
        </div>
    )
  }
}

export default CorrectAnswer