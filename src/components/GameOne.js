import React from 'react'

export default function GameOne(props) {

    if(!props.randomDogsImages) return "Loading"
    if(!props.actualBreedsDisplayed) return "Loading"

    const arrayUrls =  props.randomDogsImages
    const arrayBreeds = props.actualBreedsDisplayed

    const correctBreed = arrayBreeds[Math.floor(Math.random()*arrayBreeds.length)]
    // console.log("BREED PICKED ", correctBreed)
    let score = 0
    let wrong = 0

    const Handleclick = (event) =>{
        console.log("CLICK EVENT")
        console.log("this is URL", event.target.id)
        const chosenPic = event.target.id
        console.log("URL CHOSEN PIC", chosenPic)
        const answer = chosenPic.search(correctBreed)
        console.log("THE ANSWER IS :", answer)
        if (answer > 0) {
            alert("Congrats! Your answer is correct!")
            score = score +1
        } else {
            alert("Oh no! Try again!")
            wrong = wrong +1
        }

    }

   return (<div>
            <h2>Game Two</h2> <h2>your score: {score}</h2>
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

