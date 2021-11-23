import React, { useState } from 'react';
import styled from 'styled-components';
import { PicturesProps, PictureType } from '../App';

const DetailsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Detail = styled.div`
  width: 1360px;
  height: 524px;
`;

const DetailImage = styled.img`
  position: absolute;
  top: 10px;
  left: 0;
  height: 450px;
  width: 375px;
`;

const DetailViewImage = styled.button`
  position: absolute;
  left: 30px;
  bottom: 100px;
  height: 40px;
  width: 152px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: black;
  border: none;
  color: white;
  font-family: 'Libre Baskerville', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 2.14286px;

  &:hover {
    cursor: pointer;
  }
`;

const DetailArtistImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 395px;
`;

const DetailYear = styled.div`
  position: absolute;
  height: 150px;
  right: 0;
  top: 20px;
  font-family: 'Libre Baskerville', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 200px;
  line-height: 150px;
  text-align: right;
  color: #f3f3f3;
`;

const DetailTitleContainer = styled.div`
  background: white;
  height: fit-content;
  width: 400px;
  position: absolute;
  top: 10px;
  left: 325px;
  padding-left: 30px;
  padding-bottom: 30px;
`;

const DetailTitle = styled.div`
  font-family: 'Libre Baskerville', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 64px;
  color: #000000;
`;

const DetailArtistName = styled.div`
  font-family: 'Libre Baskerville', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: #7d7d7d;
`;

const DetailDescription = styled.div`
  position: absolute;
  height: 364px;
  left: 65.07%;
  right: 9.19%;
  top: calc(50% - 364px / 2 - 15px);
  font-family: 'Libre Baskerville', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 28px;
  color: #7d7d7d;
`;

const DetailSource = styled.a`
  position: absolute;
  height: 11px;
  width: 200px;
  left: 65.07%;
  right: 27.43%;
  top: calc(50% - 11px / 2 + 203.5px);
  font-family: 'Libre Baskerville', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 1.92857px;
  text-decoration-line: underline;
  color: #7d7d7d;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 1360px;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--grey);
`;

const FooterTitle = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;

const FooterArtist = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.75;
`;

const FooterRight = styled.div`
  width: 75px;
  display: flex;
  justify-content: space-between;
`;

const ArrowBtn = styled.button`
  outline: none;
  border: none;
  background-color: white;

  &:hover {
    cursor: pointer;
  }
`;

const ViewImageModal = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
`;

const ViewImageDiv = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ViewImageImage = styled.img``;

const ViewImageClose = styled.button`
  background: rgba(0, 0, 0, 0.8);
  border: none;
  color: white;
  font-family: 'Libre Baskerville', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 3px;

  &:hover {
    cursor: pointer;
  }
`;

const Details: React.FC<PicturesProps> = (props) => {
  console.log('hey');

  const picturesData = props.picturesData;

  const [current, setCurrent] = useState<PictureType>(picturesData[0]);

  const onNextClick = () => {
    let max = picturesData.length - 1;
    let curIndex = picturesData
      .map((picture) => picture.name)
      .indexOf(current.name);

    curIndex === max
      ? setCurrent(picturesData[0])
      : setCurrent(picturesData[curIndex + 1]);
  };

  const onPrevClick = () => {
    let max = picturesData.length - 1;
    let curIndex = picturesData
      .map((picture) => picture.name)
      .indexOf(current.name);

    curIndex === 0
      ? setCurrent(picturesData[max])
      : setCurrent(picturesData[curIndex - 1]);
  };

  const onViewImageClick = () => {
    let divElement = document.getElementById('view-image-modal');
    divElement ? (divElement.style.display = 'flex') : console.log('nah');
  };

  const onCloseClick = () => {
    let divElement = document.getElementById('view-image-modal');
    divElement ? (divElement.style.display = 'none') : console.log('nah');
  };

  return (
    <DetailsContainer id='details-container'>
      <Detail>
        <DetailImage src={current.images.hero.large} alt=''></DetailImage>
        <DetailViewImage onClick={onViewImageClick}>
          <img
            src={require('../assets/shared/icon-view-image.svg').default}
            alt=''
          />
          VIEW IMAGE
        </DetailViewImage>
        <DetailArtistImg src={current.artist.image} alt=''></DetailArtistImg>
        <DetailYear>{current.year}</DetailYear>
        <DetailTitleContainer>
          <DetailTitle>{current.name}</DetailTitle>
          <DetailArtistName>{current.artist.name}</DetailArtistName>
        </DetailTitleContainer>
        <DetailDescription>{current.description}</DetailDescription>
        <DetailSource href={current.source} target='_blank'>
          GO TO SOURCE
        </DetailSource>
      </Detail>
      <Footer>
        <div>
          <FooterTitle>{current.name}</FooterTitle>
          <FooterArtist>{current.artist.name}</FooterArtist>
        </div>
        <FooterRight>
          <ArrowBtn onClick={onPrevClick}>
            {' '}
            <img
              src={require('../assets/shared/icon-back-button.svg').default}
              alt='icon-back-button'
            />
          </ArrowBtn>
          <ArrowBtn onClick={onNextClick}>
            {' '}
            <img
              src={require('../assets/shared/icon-next-button.svg').default}
              alt='icon-next-button'
            />
          </ArrowBtn>
        </FooterRight>
      </Footer>
      <ViewImageModal id='view-image-modal'>
        <ViewImageDiv>
          <ViewImageClose onClick={onCloseClick}>CLOSE</ViewImageClose>
          <ViewImageImage src={current.images.gallery}></ViewImageImage>
        </ViewImageDiv>
      </ViewImageModal>
    </DetailsContainer>
  );
};

export default Details;
