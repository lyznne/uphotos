import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import PhotosData from './PhotosData';
import "./Photos.css"


const queryClient = new QueryClient();

const Photos = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <PhotosData />
    </QueryClientProvider>
  )
}

export default Photos