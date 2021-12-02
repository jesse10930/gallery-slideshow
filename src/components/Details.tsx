import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PicturesProps, PictureType } from '../App';

const DetailsContainer = styled.div`
  height: calc(100% - 130px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    /* height: calc(100vh - 129px); */
    justify-content: space-between;
  }

  @media (max-width: 500px) {
    height: calc(100vh - 129px);
  }
`;

const Detail = styled.div`
  position: relative;
  width: 1360px;
  height: 524px;

  @media (max-width: 800px) {
    height: 100%;
    width: 100%;
  }
`;

const DetailImage = styled.img`
  position: absolute;
  top: 10px;
  left: 0;
  height: 450px;
  width: 375px;

  @media (max-width: 800px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 90%;
    height: 280px;
    left: 5%;
  }
`;

const DetailViewImage = styled.button`
  position: relative;
  left: 10px;
  top: 410px;
  height: 40px;
  width: 152px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: var(--black);
  border: none;
  color: var(--white);
  font-family: 'Libre Baskerville', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 2.14286px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    top: 20px;
    left: 20px;
  }
`;

const DetailTitleContainer = styled.div`
  background: var(--white);
  height: fit-content;
  width: 400px;
  position: absolute;
  top: 10px;
  left: 325px;
  padding-left: 30px;
  padding-bottom: 30px;

  @media (max-width: 800px) {
    left: 225px;
    padding-left: 80px;
    padding-bottom: 80px;
  }

  @media (max-width: 500px) {
    width: 232px;
    height: 72px;
    padding: 24px;
    left: 4%;
    top: 230px;
  }
`;

const DetailArtistImg = styled.img`
  position: absolute;
  top: 390px;
  left: 395px;

  @media (max-width: 800px) {
    position: absolute;
    top: 330px;
    left: 440px;
  }

  @media (max-width: 500px) {
    top: 350px;
    left: 10%;
    height: 64px;
    width: 64px;
  }
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
  color: var(--lt-grey);

  @media (max-width: 800px) {
    right: 250px;
    top: 500px;
  }

  @media (max-width: 500px) {
    font-size: 100px;
    line-height: 100px;
    top: 382px;
    left: 110px;
  }
`;

const DetailTitle = styled.h1`
  font-family: 'Libre Baskerville', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 64px;
  color: var(--black);

  @media (max-width: 500px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

const DetailArtistName = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: var(--dk-grey);
`;

const DetailDescription = styled.p`
  position: absolute;
  height: 364px;
  left: 65.07%;
  right: 9.19%;
  top: 60px;
  font-family: 'Libre Baskerville', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 28px;
  color: var(--dk-grey);

  @media (max-width: 800px) {
    width: 450px;
    top: 500px;
    left: 15%;
  }

  @media (max-width: 500px) {
    width: 327px;
    top: 475px;
    left: 5%;
  }
`;

const DetailSource = styled.a`
  position: absolute;
  height: 11px;
  width: 200px;
  left: 65.07%;
  right: 27.43%;
  top: 460px;
  font-family: 'Libre Baskerville', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 1.92857px;
  text-decoration-line: underline;
  color: var(--dk-grey);

  @media (max-width: 800px) {
    top: 785px;
    left: 15%;
  }

  @media (max-width: 500px) {
    top: 885px;
    left: 5%;
  }
`;

const Footer = styled.footer`
  position: relative;
  width: 1360px;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--grey);
  background: var(--white);

  @media (max-width: 800px) {
    width: 100%;
    top: 758px;
  }

  @media (max-width: 500px) {
    top: calc(100vh - 200px);
  }
`;

const FooterTitle = styled.h3`
  font-family: 'Libre Baskerville', serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: var(--black);
`;

const FooterArtist = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: var(--black);
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
  background-color: var(--white);

  &:hover {
    cursor: pointer;
  }

  & > * {
    pointer-events: none;
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

  @media (max-width: 500px) {
    width: 330px;
    height: 315px;
  }
`;

const ViewImageImage = styled.img`
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;

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

const ProgressBar = styled.div`
  height: 2px;
  position: absolute;
  top: -1px;
  background: var(--black);
`;

const Details: React.FC<PicturesProps> = (props) => {
  const imageID = props.imageID;
  const picturesData = props.picturesData;
  const windowWidth = window.innerWidth;
  const [current, setCurrent] = useState<PictureType>(
    imageID ? picturesData[imageID] : picturesData[0]
  );

  console.log(
    Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    )
  );

  useEffect(() => {
    let prevBtnElem = document.getElementById('prev-btn') as HTMLButtonElement;
    let nextBtnElem = document.getElementById('next-btn') as HTMLButtonElement;
    if (!imageID || imageID === 0) {
      prevBtnElem!.disabled = true;
      prevBtnElem.style.cursor = 'not-allowed';
    }

    if (imageID === picturesData.length - 1) {
      nextBtnElem!.disabled = true;
      nextBtnElem.style.cursor = 'not-allowed';
    }
    // eslint-disable-next-line
  }, []);

  const onNextClick = () => {
    let max = picturesData.length - 1;
    let curIndex = picturesData
      .map((picture) => picture.name)
      .indexOf(current.name);

    curIndex === 0
      ? enableButton(curIndex, 'prev-btn', 1)
      : curIndex === max - 1
      ? disableButton(curIndex, 'next-btn', 1)
      : setCurrent(picturesData[curIndex + 1]);
  };

  const onPrevClick = () => {
    let max = picturesData.length - 1;
    let curIndex = picturesData
      .map((picture) => picture.name)
      .indexOf(current.name);

    curIndex === 1
      ? disableButton(curIndex, 'prev-btn', -1)
      : curIndex === max
      ? enableButton(curIndex, 'next-btn', -1)
      : setCurrent(picturesData[curIndex - 1]);
  };

  const disableButton = (curIndex: number, input: string, change: number) => {
    let buttonElem = document.getElementById(input) as HTMLButtonElement;
    buttonElem!.disabled = true;
    buttonElem!.style.cursor = 'not-allowed';
    setCurrent(picturesData[curIndex + change]);
  };

  const enableButton = (curIndex: number, input: string, change: number) => {
    let buttonElem = document.getElementById(input) as HTMLButtonElement;
    buttonElem!.disabled = false;
    buttonElem!.style.cursor = 'pointer';
    setCurrent(picturesData[curIndex + change]);
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
      <Detail id='detail'>
        <DetailImage
          id='detail-image'
          src={current.images.hero.large}
          alt=''
        ></DetailImage>
        <DetailViewImage id='detail-view-image' onClick={onViewImageClick}>
          <img
            src={require('../assets/shared/icon-view-image.svg').default}
            alt=''
          />
          VIEW IMAGE
        </DetailViewImage>
        <DetailArtistImg
          id='detail-artist-img'
          src={current.artist.image}
          alt=''
        ></DetailArtistImg>
        <DetailYear id='detail-year'>{current.year}</DetailYear>
        <DetailTitleContainer id='detail-title-container'>
          <DetailTitle id='detail-title'>{current.name}</DetailTitle>
          <DetailArtistName id='detail-artist-name'>
            {current.artist.name}
          </DetailArtistName>
        </DetailTitleContainer>
        <DetailDescription id='detail-description'>
          {current.description}
        </DetailDescription>
        <DetailSource id='detail-source' href={current.source} target='_blank'>
          GO TO SOURCE
        </DetailSource>
      </Detail>
      <Footer id='footer'>
        <div>
          <FooterTitle id='footer-title'>{current.name}</FooterTitle>
          <FooterArtist id='footer-artist'>{current.artist.name}</FooterArtist>
        </div>
        <FooterRight id='footer-right'>
          <ArrowBtn id='prev-btn' onClick={onPrevClick}>
            {' '}
            <img
              src={require('../assets/shared/icon-back-button.svg').default}
              alt='icon-back-button'
              style={{ opacity: current.id === 0 ? 0.5 : 1 }}
            />
          </ArrowBtn>
          <ArrowBtn id='next-btn' onClick={onNextClick}>
            {' '}
            <img
              src={require('../assets/shared/icon-next-button.svg').default}
              alt='icon-next-button'
              style={{
                opacity: current.id === picturesData.length - 1 ? 0.5 : 1,
              }}
            />
          </ArrowBtn>
        </FooterRight>
        <ProgressBar
          id='progress-bar'
          style={{
            width:
              windowWidth > 800
                ? (1360 / picturesData.length) * (current.id + 1) + 'px'
                : windowWidth <= 500
                ? (356 / picturesData.length) * (current.id + 1) + 'px'
                : (729 / picturesData.length) * (current.id + 1) + 'px',
          }}
        ></ProgressBar>
      </Footer>
      <ViewImageModal id='view-image-modal'>
        <ViewImageDiv id='view-image-div'>
          <ViewImageClose id='view-image-close' onClick={onCloseClick}>
            CLOSE
          </ViewImageClose>
          <ViewImageImage
            id='view-image-image'
            // src={
            //   window.innerWidth <= 800
            //     ? current.images.hero.small
            //     : current.images.hero.large
            // }
            src={current.images.hero.small}
          ></ViewImageImage>
        </ViewImageDiv>
      </ViewImageModal>
    </DetailsContainer>
  );
};

export default Details;
