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
  // Define and set initial state
  const [data, setData] = useState<PictureType[]>([]);
  const [slideShow, setSlideShow] = useState<boolean>(false);
  const [imageID, setImageID] = useState<number | undefined>();

  // Effect to retrieve and store data upon first render
  useEffect(() => {
    const data = require('./data.json');
    const newData = data.map((pictureObj: any, i: number) => {
      // Add key of id to each entry in object
      pictureObj.id = i;
      return pictureObj;
    });

    setData(newData);
  }, []);

  // On start/stop click, store and set the imageID state, set slideshow state to true/false
  const onStartStopClick = (e: any) => {
    const elemID = e.target.childNodes[0].id;
    const imageID = elemID
      ? Number(elemID.substr(elemID.indexOf('-') + 1))
      : NaN;
    setImageID(imageID);

    const newSlideShowStatus = !slideShow;
    setSlideShow(newSlideShowStatus);
  };

  return (
    <div className='App'>
      <Header slideShow={slideShow} onStartStopClick={onStartStopClick} />
      {/* If slideShow false, show pictures component*/}
      {!slideShow ? (
        <Pictures
          picturesData={data}
          onStartStopClick={onStartStopClick}
          imageID={imageID}
        />
      ) : (
        // If slideShow true, show details component
        <Details picturesData={data} imageID={imageID} />
      )}
    </div>
  );
};

export default App;
