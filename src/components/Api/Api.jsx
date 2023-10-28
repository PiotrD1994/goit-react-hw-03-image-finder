import axios from 'axios'

const fetchImages = async (query, page) => {
const apiKey= '39267664-2bc18c2ff9f132c4867ec917a'
const baseURL = 'https://pixabay.com/api/'

const url =`${baseURL}?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12` 

try{
    const response = await axios.get(url)
    return response.data
} catch(error) {
    console.log(error)
}
}

export default fetchImages
