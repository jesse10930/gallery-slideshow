import React from 'react';
import Picture from './Picture';
import { PicturesProps, ArtistType, ImagesType } from '../App';

export interface PictureProps {
  name: string;
  year: number;
  description: string;
  source: string;
  artist: ArtistType;
  images: ImagesType;
  key?: number;
}

const Pictures: React.FC<PicturesProps> = (props) => {
  const picturesData = props.picturesData;

  return (
    <div id='pictures-container'>
      {picturesData.map((picture, i) => (
        <Picture
          key={i}
          name={picture.name}
          year={picture.year}
          description={picture.description}
          source={picture.source}
          artist={picture.artist}
          images={picture.images}
        />
      ))}
    </div>
  );
};

export default Pictures;
