import React from 'react';

type Props = {
  pictureItem: object;
};

const Picture: React.FC<Props> = ({ pictureItem }) => {
  return <div className='picture-item'>{pictureItem}</div>;
};

export default Picture;
