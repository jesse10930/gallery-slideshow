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
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 800px) {
    justify-content: space-evenly;
  }
`;

const PicturesColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const PicturesColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const PicturesColumnThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const PicturesColumnFour = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Pictures: React.FC<PicturesProps> = (props) => {
  const picturesData = props.picturesData;
  const onStartStopClick = props.onStartStopClick;

  return (
    <PicturesContainer id='pictures-container'>
      <PicturesColumnOne id='picture-col-one'>
        {picturesData.map((picture, i) => (
          // i <= 3 && (
          // i <= 7 && (
          <Picture
            key={i}
            id={picture.id}
            name={picture.name}
            artist={picture.artist}
            images={picture.images}
            onStartStopClick={onStartStopClick}
          />
        ))}
      </PicturesColumnOne>
      {/* <PicturesColumnTwo id='picture-col-two'>
        {picturesData.map(
          (picture, i) =>
            // i >= 4 &&
            // i <= 7 &&
            i >= 8 && (
              <Picture
                key={i}
                id={picture.id}
                name={picture.name}
                artist={picture.artist}
                images={picture.images}
                onStartStopClick={onStartStopClick}
              />
            )
        )}
      </PicturesColumnTwo> */}
      {/* <PicturesColumnThree id='picture-col-three'>
        {picturesData.map(
          (picture, i) =>
            i >= 8 &&
            i <= 10 && (
              <Picture
                key={i}
                id={picture.id}
                name={picture.name}
                artist={picture.artist}
                images={picture.images}
                onStartStopClick={onStartStopClick}
              />
            )
        )}
      </PicturesColumnThree>
      <PicturesColumnFour id='picture-col-four'>
        {picturesData.map(
          (picture, i) =>
            i >= 11 && (
              <Picture
                key={i}
                id={picture.id}
                name={picture.name}
                artist={picture.artist}
                images={picture.images}
                onStartStopClick={onStartStopClick}
              />
            )
        )}
      </PicturesColumnFour> */}
    </PicturesContainer>
  );
};

export default Pictures;
