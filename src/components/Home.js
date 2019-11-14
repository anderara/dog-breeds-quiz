import React from 'react';

export default function(props) {
    
    const arrayGifs = props.gifs
    const gifDisplayed = arrayGifs[Math.floor(Math.random()*arrayGifs.length)]

  return (<div>
    <main>
        <h1>Doggo Game</h1>
    </main>
    <div>
        <h2> Are you ready to play? </h2>
        <br/>
        <img id={gifDisplayed} src={gifDisplayed} alt="" width="380" height="300" />
        <p>Please select <strong>Breeds List</strong> to explore all the breeds </p>
        <p>Please select <strong>Game #1</strong> or <strong>Game #2</strong> to start playing</p>
    </div>
    </div>
    )
}