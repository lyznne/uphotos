import axios from "axios"
import "./Photos.css"
import React, { useEffect, useState } from 'react'


const Photos = () => {
  const [photos, setPhotos] = useState([]);

  const options = {
    method: "GET",
    url: `${process.env.REACT_APP_URL_ENDPOINT}`,
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
      accept: "application/json"
    }
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setPhotos(response.data);
        console.log(`Photos`, response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="photos main_padding">
      <div className="photos-heading">
        <h1>Uphotos</h1>
        <span className="all-images">
          {photos.length}
        </span>
      </div>
      <div className="photo-container">
        {photos.map((photo, index) => (
          <div className="image" key={index}> 
            <div className="image-wrapper"> 
              <img src={photo.urls.full} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Photos;
