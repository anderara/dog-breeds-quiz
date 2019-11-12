import request from 'superagent'
export const GAME_ONE = 'GAME_ONE'

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

// export const contentGameOne = (randomDogsImages, actualBreedsDisplayed) => ({
//     type: GAME_ONE,
//     payload: [{
//         images: randomDogsImages,
//         breeds: actualBreedsDisplayed
//     }]
// })

export const startGameOne = () => {
    return (dispatch) => {
        request
            .get('https://dog.ceo/api/breeds/image/random/3')
            .then(response => {
                const randomDogsImages = response.body.message
                const actualBreedsDisplayed = getArrayOfBreeds(randomDogsImages)
                dispatch({
                    type: GAME_ONE,
                    payload: [{
                        images: randomDogsImages,
                        breeds: actualBreedsDisplayed
                    }]
                })
        })
        .catch(console.error)
    }
}