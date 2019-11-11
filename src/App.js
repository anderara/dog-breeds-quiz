import React from 'react';
import './App.css';
import DogListContainer from './components/DogListContainer';
import DogImagesContainer from './components/DogImagesContainer'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import GameOneContainer from './components/GameOneContainer';
import HomeContainer from './components/HomeContainer';
import GameTwoContainer from './components/GameTwoContainer';

function App() {
  return (
    <div className="App">

        <nav id='navigationButtons'>
            <button className="button" ><Link className="componentsButtons" to="/">Home</Link></button>
            <button className="button" ><Link className="componentsButtond" to="/dog-breeds/">Breeds List</Link></button>
            <button className="button" ><Link className="componentsButtons" to="/gameone/">Game #1</Link></button>
            <button className="button" ><Link className="componentsButtons" to="/gametwo/">Game #2</Link></button>
            {/* <button className="button" ><Link className="componentsButtons" to="/game3/">Game #3</Link></button> */}
        </nav>

          
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/dog-breeds" component={DogListContainer} />
          <Route path="/dog-breeds/:breed" component={DogImagesContainer} />
          <Route exact path="/gameone" component={GameTwoContainer}/>
          <Route exact path="/gametwo" component={GameOneContainer} />
        
    </div>
  );
}

export default App;
