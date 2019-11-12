import React from 'react'

export default function GameOne(props) {

    if(!props.randomDogsImages) return "Loading"
    if(!props.actualBreedsDisplayed) return "Loading"

    const arrayUrls =  props.randomDogsImages
    const arrayBreeds = props.actualBreedsDisplayed

    const correctBreed = arrayBreeds[Math.floor(Math.random()*arrayBreeds.length)]

    const Handleclick = (event) =>{
        const chosenPic = event.target.id
        const answer = chosenPic.search(correctBreed)

        if (answer > 0) {
            alert("Congrats! Your answer is correct!")

        } else {
            alert("Oh no! Try again!")
        }
            
        // const scoring = () => {
        //     this.dispatch({
        //         type: 'SCORE',
        //         // payload: score
        //     })
        // }
        // scoring()
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

