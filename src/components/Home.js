import React from 'react';

export default function(props) {
    
    const arrayGifs = props.gifs
    const gifDisplayed = arrayGifs[Math.floor(Math.random()*arrayGifs.length)]


console.log("TEST IN HOME", gifDisplayed)
  return (<div>
    <main>
        <h1>Doggo Game</h1>
    </main>
    <div>
        <h2> Welcome to "de beste" DOGGO GAME out there! </h2>
        <h3>Are you ready to play? </h3>
        <img id={gifDisplayed} src={gifDisplayed} alt="" width="380" height="300" />
        <p>Please select <strong>"Breeds List"</strong> to explore all the breeds </p>
        <p>Please select <strong>"Game One"</strong> or <strong>Game Two</strong> to start playing</p>
    </div>
    </div>
    )
}