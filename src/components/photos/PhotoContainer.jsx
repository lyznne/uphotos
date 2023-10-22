import React from 'react'
import { BsDownload, BsFillHeartFill } from "react-icons/bs";
import axios from 'axios';
import { useQuery } from 'react-query';
import fetchPhotosData from '../../utils/query';

const PhotoContainer = ({ photo }) => {
  
    const handleDownload =async (link) => {
        axios.get(link,{
            headers:{
                Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
                accept: "application json",
            }
        })

       
    }

    return (
        <div className="image" key={photo.id}>
            <div className="image-wrapper">
                <div className="image-container">
                    <img src={photo.urls.full} alt='' />

                </div>
                <div className="image-bottom">
                    <div className="user">
                        <img src={photo.user.profile_image.medium} />
                        <a href={photo.user.portfolio_url} target='_black'>{photo.user.username}</a>
                    </div>
                    <button onClick={(event) => {
                        event.preventDefault()
                        handleDownload(photo.links.download_location)
                    }} className="download">
                        <BsDownload />
                    </button>


                </div>
                <div className="like-btn">
                    <BsFillHeartFill />
                </div>
            </div>
        </div>
    )
}

export default PhotoContainer