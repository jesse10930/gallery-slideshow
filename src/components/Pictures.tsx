import React from 'react';
import styled from 'styled-components';
import Picture from './Picture';
import { PicturesProps, ArtistType, ImagesType } from '../App';

export interface PictureProps {
  name: string;
  artist: ArtistType;
  images: ImagesType;
  id: number;
  onStartStopClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  key?: number;
}

const PicturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 800px) {
    justify-content: space-evenly;
  }
`;

const cpuColStyle = {
  marginLeft: '-10px',
  width: '1380px',
  height: '1382px',
};

const tabColStyle = {
  margin: 'auto',
  width: '690px',
  height: '2764px',
};

const phoneColStyle = {
  margin: 'auto',
  width: '345px',
  height: '5528px',
};

const Pictures: React.FC<PicturesProps> = (props) => {
  const picturesData = props.picturesData;
  const windowWidth = window.innerWidth;
  const onStartStopClick = props.onStartStopClick;

  return (
    <PicturesContainer
      id='pictures-container'
      style={
        windowWidth > 800
          ? cpuColStyle
          : windowWidth <= 500
          ? phoneColStyle
          : tabColStyle
      }
    >
      {picturesData.map((picture, i) => (
        <Picture
          key={i}
          id={picture.id}
          name={picture.name}
          artist={picture.artist}
          images={picture.images}
          onStartStopClick={onStartStopClick}
        />
      ))}
    </PicturesContainer>
  );
};

export default Pictures;
