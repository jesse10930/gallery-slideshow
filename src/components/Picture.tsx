import React from 'react';
import styled from 'styled-components';
import { PictureProps } from './Pictures';

const PictureItem = styled.div`
  text-align: center;
  height: fit-content;
`;

const Picture: React.FC<PictureProps> = (props) => {
  const { name, year, description, source, artist, images } = props;

  return (
    <PictureItem className='picture-item'>
      <p>{name}</p>
      <p>{artist.name}</p>
      <img src={images.thumbnail} alt='' />
    </PictureItem>
  );
};

export default Picture;
