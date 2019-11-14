import React from 'react'
import Home from './Home'
import { connect } from 'react-redux'

class HomeContainer extends React.Component {

  render() {
    return <Home gifs = {this.props.gifs}/> 
  }
}

const mapStateToProps = (state) => {
  return {
      
    gifs: state.gifsHomePage.gifs
  }
}

export default connect(mapStateToProps)(HomeContainer)