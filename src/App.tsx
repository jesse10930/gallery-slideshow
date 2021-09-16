import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Pictures from './components/Pictures';
import './App.css';

type PictureType = {
  name: string;
  year: number;
  description: string;
  source: string;
  artist: ArtistType;
  images: ImagesType;
  key?: number;
};

export type ArtistType = {
  image: string;
  name: string;
};

export type ImagesType = {
  thumbnail: string;
  hero: HeroType;
  gallery: string;
};

export type HeroType = {
  small: string;
  large: string;
};

export interface PicturesProps {
  picturesData: PictureType[];
}

const App: React.FC = () => {
  const [data, setData] = useState<PictureType[]>([]);

  useEffect(() => {
    const data = require('./data.json');
    setData(data);
  }, []);

  return (
    <div className='App'>
      <Header />
      <Pictures picturesData={data} />
    </div>
  );
};

export default App;
