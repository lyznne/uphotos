import { useQuery } from 'react-query';
import Topics from './Topics';
import { BsDownload, BsFillHeartFill } from "react-icons/bs";
import fetchPhotosData from '../../utils/query';
import PhotoContainer from './PhotoContainer';


const PhotosData = ({props}) => {

// console.log("search result props",props.data.results)
  const { data, error, isLoading } = useQuery('photos', () => fetchPhotosData('photos'));
  console.log("data ==> ", data )

console.log(data)
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
                {props.data.results.map((photo) => (
                    <PhotoContainer photo={photo} />
                   
                ))}
            </div>
            <div className="photo-container">
                {data.map((photo) => (
                    <PhotoContainer photo={photo} />
                   
                ))}


            </div>
        </div>
    );
};

export default PhotosData;
