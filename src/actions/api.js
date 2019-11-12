import request from 'superagent'

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