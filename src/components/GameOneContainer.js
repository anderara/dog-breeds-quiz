import React, {Component} from 'react'
import request from 'superagent'
import GameOne from './GameOne'
import { connect } from 'react-redux'

class GameOneContainer extends Component{
    
   componentDidMount() {
       request
       .get('https://dog.ceo/api/breeds/image/random/3')
       .then(response => {
           const randomDogsImages = response.body.message

           const actualBreedsDisplayed = this.getArrayOfBreeds(randomDogsImages)
           
           this.props.dispatch({
               type: 'GAME_ONE',
               payload: [{
                   images: randomDogsImages,
                   breeds: actualBreedsDisplayed
               }]
            })
        })
         .catch(console.error)
    }

    getArrayOfBreeds(arrayOfUrls) {
        const splittedUrls = arrayOfUrls.map(url=>{
            return url.split("/")
        })
        const arrayOne = splittedUrls[0]
        const arrayTwo = splittedUrls[1]
        const arrayThree = splittedUrls[2]

        const firstBreed = arrayOne[4]
        const secondBreed = arrayTwo[4]
        const thirdBreed = arrayThree[4]

        const breedsFromImages = [firstBreed, secondBreed, thirdBreed]
        
        return breedsFromImages
      }
   
    render() {
        // console.log("this.props test:", this.props)
       return <div>
           <GameOne randomDogsImages = {this.props.randomDogsImages} 
                    actualBreedsDisplayed = {this.props.actualBreedsDisplayed} />
                    {/* {console.log('random image :',this.props.randomDogsImages)} */}
           </div> 
    }
}

const mapStateToProps = (state) => {
    // console.log('STATE FROM game one container',state)
    const [game] = state.gameOne
    if (game) return {
        randomDogsImages: game.images,
        actualBreedsDisplayed: game.breeds
    }

    return {}
}

export default connect(mapStateToProps)(GameOneContainer)