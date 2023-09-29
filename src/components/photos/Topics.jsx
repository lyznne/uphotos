import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_TOPICS_ENDPOINT}`,
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
        accept: 'application/json',
    }, 
    params: {
        per_page: 25
    }
    
};

const Topics = () => {
    const fetchTopics = async () => {
        try {
            const response = await axios.request(options);
            console.table(response.data);

            return response.data;

        } catch (error) {
            console.error('Error fetching data: ', error);
            throw error;
        }
    };

    const { data, error, isLoading } = useQuery('topics', fetchTopics);

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
