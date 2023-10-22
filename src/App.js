import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Photos from './components/photos/Photos';
import { useState } from 'react';
import { useQuery } from 'react-query';
import fetchPhotosData from './utils/query';


function App() {

  const [inputValue, setInputValue] = useState('');
  const { data, error, isLoading } = useQuery('search', () => fetchPhotosData(`search/photos?query=${inputValue}`));
  return (
    <div className="App">
      <Navbar />
      <Header inputValue={inputValue} setInputValue={setInputValue}/>
      <Photos data={data} error={error} isLoading={isLoading}/>
      <Footer />
    </div>
  );
}

export default App;
