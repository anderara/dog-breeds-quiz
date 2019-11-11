import React from 'react'
import DogList from './DogList'
import { connect } from 'react-redux'
import request from 'superagent'

class DogListContainer extends React.Component {
    componentDidMount(){
            
        request
        .get("https://dog.ceo/api/breeds/list/all")
        .then(response => {
            const breeds = Object.keys(response.body.message)

            this.props.dispatch({
                type: "SET_DOGS",
                payload: breeds
            })
        })
        .catch(console.error)
    }

  render() {
    //   console.log("this state", this.state)
    return <DogList breeds={this.props.breeds} />
  }
}

const mapStateToProps = (state) => {
  return {
    breeds: state.breeds
  }
}

export default connect(mapStateToProps)(DogListContainer)