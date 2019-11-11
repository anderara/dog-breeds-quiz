import React from 'react'
import Home from './Home'
import { connect } from 'react-redux'

class HomeContainer extends React.Component {

  render() {    
    // console.log("PROPS TEST", this.props.gifs)

    return <Home gifs = {this.props.gifs}/> 
  }
}

const mapStateToProps = (state) => {
    console.log("TEST IN THE MAP", state.gifsHomePage.gifs)
  return {
      
    gifs: state.gifsHomePage.gifs
  }
}

export default connect(mapStateToProps)(HomeContainer)