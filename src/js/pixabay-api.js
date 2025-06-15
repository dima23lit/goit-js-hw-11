import axios from 'axios';

export function getImagesByQuery(query) {
    let APIKEY = '44929150-af2bf51de3b27508be12093c9';

    return axios.get("https://pixabay.com/api/", {
        params: {
            key: APIKEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    })
        .then(response => 
            response.data
    )
    
}