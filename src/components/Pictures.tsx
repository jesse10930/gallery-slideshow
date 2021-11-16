import React from 'react';
import styled from 'styled-components';
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

const PicturesContainer = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  grid-auto-flow: dense;
`;

const Pictures: React.FC<PicturesProps> = (props) => {
  const picturesData = props.picturesData;

  return (
    <PicturesContainer id='pictures-container'>
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
    </PicturesContainer>
  );
};

export default Pictures;
