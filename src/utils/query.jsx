import axios from "axios";

async function fetchPhotosData(endpoint) {
    const options = {
        method: "GET",
        url: `${process.env.REACT_APP_URL_ENDPOINT}/${endpoint}`,
        headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
            accept: "application json",
        },
        params: {
            per_page: 30,
        },
    };

    const response = await axios.request(options);
    return response.data;
}

export default fetchPhotosData