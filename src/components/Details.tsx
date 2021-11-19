import React, { useState } from 'react';
import styled from 'styled-components';
import { PicturesProps, PictureType } from '../App';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Detail = styled.div`
  position: absolute;
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
  height: 200px;
  width: 300px;
  position: absolute;
  top: 10px;
  left: 325px;
  padding-left: 30px;
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

const Details: React.FC<PicturesProps> = (props) => {
  const picturesData = props.picturesData;

  const [current, setCurrent] = useState<PictureType>(picturesData[0]);

  return (
    <DetailsContainer id='details-container'>
      <Detail>
        <DetailImage src={current.images.hero.large} alt=''></DetailImage>
        <DetailViewImage>
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
        <DetailSource href={current.source}>GO TO SOURCE</DetailSource>
      </Detail>
      <Footer>
        <div>
          <FooterTitle>{current.name}</FooterTitle>
          <FooterArtist>{current.artist.name}</FooterArtist>
        </div>
        <FooterRight>
          <img
            src={require('../assets/shared/icon-back-button.svg').default}
            alt='icon-back-button'
          />
          <img
            src={require('../assets/shared/icon-next-button.svg').default}
            alt='icon-next-button'
          />
        </FooterRight>
      </Footer>
    </DetailsContainer>
  );
};

export default Details;
