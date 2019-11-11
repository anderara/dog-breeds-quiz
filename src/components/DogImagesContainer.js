import React, {Component} from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import DogImages from './DogImages'

class DogImagesContainer extends Component {

    componentDidMount() {
        const { breed } = this.props.match.params

        request
        .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random/10`)
        .then(response => {
            const breedImages = response.body.message

            this.props.dispatch({
                type: "BREED_IMAGES",
                payload: breedImages
            })
        })
        .catch(console.error)  
    }
    
    render() {
        const { breed } = this.props.match.params
       
        return <DogImages breedImages={this.props.breedImages} selectedBreed={breed}  />
    }
}
    
const mapStateToProps = (state) => {
    return {
    breedImages: state.breedImages
    }
}
    
export default connect(mapStateToProps)(DogImagesContainer)