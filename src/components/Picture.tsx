import React from 'react';
import styled from 'styled-components';
import { PictureProps } from './Pictures';

const PictureItem = styled.button`
  position: relative;
  text-align: center;
  height: fit-content;
  margin: 10px 0;
  transition: 0.5s ease;
  border: none;
  outline: none;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  & > * {
    pointer-events: none;
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: 170px;
  width: 100%;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(0, 0, 0, 1)
  );
`;

const PictureTitle = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  width: 246px;
  text-align: left;
`;

const Title = styled.p`
  color: var(--white);
  font-family: 'Libre Baskerville', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
`;

const Author = styled.p`
  color: var(--white);
  margin-top: 5px;
  font-family: 'Libre Baskerville', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  mix-blend-mode: normal;
  opacity: 0.75;
`;

const Picture: React.FC<PictureProps> = (props) => {
  const { name, artist, images, id, onStartStopClick } = props;

  return (
    <PictureItem onClick={onStartStopClick}>
      <img src={images.thumbnail} alt='' id={'image-' + id} />
      <Overlay></Overlay>
      <PictureTitle>
        <Title>{name}</Title>
        <Author>{artist.name}</Author>
      </PictureTitle>
    </PictureItem>
  );
};

export default Picture;
