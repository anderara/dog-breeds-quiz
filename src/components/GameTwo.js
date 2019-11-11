import React, { Component } from 'react'

class GameTwo extends Component {

    CheckAnswer = (event) => {
        let dogInImage = this.props.randomDogs[0].question[1].search(event.target.value);
        if (dogInImage === -1) {
           alert("Wrong answer!")
        
        } else {
            alert("Right answer!")
           
        }

        
    }

    
    
    render(){
        const gameOneDogs = this.props.randomDogs[0]
       
        console.log("these are the answers", gameOneDogs)
        return (
            <div>
                <h4>Game one</h4>
                <h1>Score: <i className="paid-feature">Pay to unlock</i></h1>
                <h4>Match the name with the dog in the picture</h4>
                <div >

                    <img key={gameOneDogs.question[1]} src={gameOneDogs.question[1]} alt="Dog" width="420" height="380"></img>

                </div>
                <div>
                    {gameOneDogs.answers.map(answer =>
                        <button key={answer} value={answer} onClick={this.CheckAnswer}>{answer}</button>)}
                </div>
                <h4><i>Refresh the page to keep playing after you have seen your answer</i></h4>
            </div>
        )
        
    }
}

export default GameTwo