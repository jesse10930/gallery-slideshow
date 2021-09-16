import React from 'react';
import { PictureProps } from './Pictures';

const Picture: React.FC<PictureProps> = (props) => {
  const { name, year, description, source, artist, images } = props;

  return (
    <div className='picture-item'>
      <p>{name}</p>
      <p>{artist.name}</p>
      <img src={images.thumbnail} alt='' />
    </div>
  );
};

export default Picture;
