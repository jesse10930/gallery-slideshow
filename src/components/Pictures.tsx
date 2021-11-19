import React from 'react';
import styled from 'styled-components';
import Picture from './Picture';
import { PicturesProps, ArtistType, ImagesType } from '../App';

export interface PictureProps {
  name: string;
  artist: ArtistType;
  images: ImagesType;
  key?: number;
}

const PicturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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

  return (
    <PicturesContainer id='pictures-container'>
      <PicturesColumnOne id='picture-col-one'>
        {picturesData.map(
          (picture, i) =>
            i <= 3 && (
              <Picture
                key={i}
                name={picture.name}
                artist={picture.artist}
                images={picture.images}
              />
            )
        )}
      </PicturesColumnOne>
      <PicturesColumnTwo id='picture-col-two'>
        {picturesData.map(
          (picture, i) =>
            i >= 4 &&
            i <= 7 && (
              <Picture
                key={i}
                name={picture.name}
                artist={picture.artist}
                images={picture.images}
              />
            )
        )}
      </PicturesColumnTwo>
      <PicturesColumnThree id='picture-col-three'>
        {picturesData.map(
          (picture, i) =>
            i >= 8 &&
            i <= 10 && (
              <Picture
                key={i}
                name={picture.name}
                artist={picture.artist}
                images={picture.images}
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
                name={picture.name}
                artist={picture.artist}
                images={picture.images}
              />
            )
        )}
      </PicturesColumnFour>
    </PicturesContainer>
  );
};

export default Pictures;
