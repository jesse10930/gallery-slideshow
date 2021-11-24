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
  imageID: number | undefined;
}

export interface HeaderProps {
  slideShow: boolean;
  onStartStopClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const App: React.FC = () => {
  const [data, setData] = useState<PictureType[]>([]);
  const [slideShow, setSlideShow] = useState<boolean>(false);
  const [imageID, setImageID] = useState<number | undefined>();

  useEffect(() => {
    const data = require('./data.json');
    const newData = data.map((pictureObj: any, i: number) => {
      pictureObj.id = i;
      return pictureObj;
    });

    setData(newData);
  }, []);

  const onStartStopClick = (e: any) => {
    let elemID = e.target.childNodes[0].id;
    let imageID = elemID ? Number(elemID.substr(elemID.indexOf('-') + 1)) : NaN;
    setImageID(imageID);

    const newSlideShowStatus = !slideShow;
    setSlideShow(newSlideShowStatus);
  };

  return (
    <div className='App'>
      <Header slideShow={slideShow} onStartStopClick={onStartStopClick} />
      {!slideShow ? (
        <Pictures
          picturesData={data}
          onStartStopClick={onStartStopClick}
          imageID={imageID}
        />
      ) : (
        <Details picturesData={data} imageID={imageID} />
      )}
    </div>
  );
};

export default App;
