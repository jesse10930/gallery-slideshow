import React, { useState } from 'react';
import styled from 'styled-components';
import GalleriaLogo from '../assets/shared/logo.svg';

const StyledHeader = styled.header`
  height: 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--grey);
`;

const HeaderRight = styled.button`
  color: var(--dk-grey);
  font-family: 'Libre Baskerville', serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2.57143px;
  background: none;
  border: none;
  outline: none;

  &:hover {
    color: var(--black);
    cursor: pointer;
  }
`;

const Header: React.FC = () => {
  const [slideShowing, setSlideShowing] = useState<boolean>(false);

  const onStartStopClick = () => {
    const newSlideShowing = !slideShowing;
    setSlideShowing(newSlideShowing);
  };

  return (
    <StyledHeader id='header'>
      <img src={GalleriaLogo} alt='Galleria Logo' />
      <HeaderRight id='header-right' onClick={onStartStopClick}>
        {slideShowing ? (
          <span id='end-slideshow'>STOP SLIDESHOW</span>
        ) : (
          <span id='start-slideshow'>START SLIDESHOW</span>
        )}
      </HeaderRight>
    </StyledHeader>
  );
};

export default Header;