import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Pictures from './components/Pictures';
import Details from './components/Details';
import './App.css';

export type PictureType = {
  name: string;
  year: number;
  description: string;
  source: string;
  artist: ArtistType;
  images: ImagesType;
  id: number;
  key?: number;
};

// type DetailType = {
//   name: string;
//   year: number;
//   description: string;
//   source: string;
//   artist: ArtistType;
//   images: ImagesType;
//   gallery: string;
//   key?: number;
// };

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
  onStartStopClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface HeaderProps {
  slideShow: boolean;
  onStartStopClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// export interface DetailsProps {
//   detailsData: DetailType[];
// }

const App: React.FC = () => {
  const [data, setData] = useState<PictureType[]>([]);
  const [slideShow, setSlideShow] = useState<boolean>(false);

  useEffect(() => {
    const data = require('./data.json');
    const newData = data.map((pictureObj: any, i: number) => {
      pictureObj.id = i;
      return pictureObj;
    });

    setData(newData);
  }, []);

  const onStartStopClick = (e: any) => {
    console.log(e.target.id);
    const newSlideShowStatus = !slideShow;
    setSlideShow(newSlideShowStatus);
  };

  return (
    <div className='App'>
      <Header slideShow={slideShow} onStartStopClick={onStartStopClick} />
      {!slideShow ? (
        <Pictures picturesData={data} onStartStopClick={onStartStopClick} />
      ) : (
        <Details picturesData={data} />
      )}
    </div>
  );
};

export default App;
