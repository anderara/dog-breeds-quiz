import React from 'react';

export default function DogList(props) {
  
    if(!props.breedImages) return "Loading"

  return (<div>
    <p>You selected: <strong> {props.selectedBreed} </strong> </p>
    <ul>
      { props.breedImages.map(image =>
      <img id="dogImage" src={image} alt={props.selectedBreed}> 
      </img>
      ) }
    </ul>
  </div>)
}