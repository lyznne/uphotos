import { useQuery } from 'react-query';
import Topics from './Topics';
import { BsDownload, BsFillHeartFill } from "react-icons/bs";
import fetchPhotosData from '../../utils/query';


const PhotosData = () => {


  const { data, error, isLoading } = useQuery('photos', () => fetchPhotosData('photos'));


    if (isLoading) return 'Loading ....';
    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div className="photos main_padding">
            <div className="photos-top">
                <div className="topics">
                    <Topics />
                </div>
                <div className="photos-heading">
                    <h1>Uphotos</h1>
                    <span className="all-images">{data.length}</span>
                </div>

            </div>

            <div className="photo-container">
                {data.map((photo) => (
                    <div className="image" key={photo.id}>
                        <div className="image-wrapper">
                            {isLoading ? (
                                <div className="image-container">
                                    <img src={photo.blur_hash} alt="" />
                                </div>
                            ) : (
                                <div className="image-container">
                                    <img src={photo.urls.full} alt='' />

                                </div>
                            )}
                            <div className="image-bottom">
                                <div className="user">
                                    <img src={photo.user.profile_image.medium} />
                                    <a href={photo.user.portfolio_url} target='_black'>{photo.user.username}</a>
                                </div>
                                <div className="download">
                                    <BsDownload />
                                </div>
                            </div>
                            <div className="like-btn">
                                <BsFillHeartFill />
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
};

export default PhotosData;
