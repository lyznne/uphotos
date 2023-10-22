import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import fetchPhotosData from '../../utils/query';


const Topics = () => {

    const { data, error, isLoading } = useQuery('topics', () => fetchPhotosData('topics'));

    if (isLoading) return 'Loading ....';
    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div className='topic'>
            {data.map((topic) => (
                <div className="topic-content" key={topic.id}>
                    <p>{topic.title}</p>
                    <span>{topic.total_photos}</span>
                </div>
            ))}
        </div>
    );
};

export default Topics;
