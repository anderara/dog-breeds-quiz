import React from 'react';
import { Link } from 'react-router-dom';

export default function DogList(props) {
    if(!props.breeds) return "Loading"

  return (<div>
    <h1>Dog Breeds</h1>
    <div className="breedList">
    <ul>
      { props.breeds.map(breed =>
      <li key={breed}>
        <Link to={ `/dog-breeds/${breed}` }>{breed}</Link>
        </li>
      ) }
    </ul>
    </div>
  </div>)
}