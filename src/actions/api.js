import request from 'superagent'

export const START_GAME = 'START_GAME'

const getArrayOfBreeds = (arrayOfUrls) => {
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

export const startGame = () => {
    return (dispatch) => {
        request
            .get('https://dog.ceo/api/breeds/image/random/3')
            .then(response => {
                const randomDogsImages = response.body.message
                const actualBreedsDisplayed = getArrayOfBreeds(randomDogsImages)
                dispatch({
                    type: START_GAME,
                    payload: [{
                        images: randomDogsImages,
                        breeds: actualBreedsDisplayed
                    }]
                })
        })
        .catch(console.error)
    }
}