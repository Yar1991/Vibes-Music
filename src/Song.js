import React from 'react';
import styled from 'styled-components';

const Song = ({ currentSong, playing })=>{

  return (
    <SongDiv key={currentSong.id}>
      <ImgDiv className={playing ? 'active' : ''}>
        {!currentSong.img ? <LoadingDiv></LoadingDiv> : <SongImg src={currentSong.img} alt={currentSong.title} />}
      </ImgDiv>
      <InfoDiv>
        <Title>{currentSong.title}</Title>
        <Artist>{currentSong.artist}</Artist>
      </InfoDiv>
    </SongDiv>
  )
}

export default Song;


const SongDiv = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem; 

  @media screen and (min-width: 768px){
    width: 40%;
    margin-top: 3rem; 
  }
  @media screen and (min-width: 1024px){
    width: 70%;
    margin-top: 0; 
  }
  @media screen and (min-width: 1400px){
    width: 50%;
    margin-top: 0; 
  }
  @media screen and (min-height: 800px) and (max-width: 1024px){
    margin-top: 5rem;
    width: 50%;
  }
  @media screen and (min-height: 800px) and (max-width: 767px){
    margin-top: 5rem;
    width: 70%;
  }
  @media screen and (min-height: 1300px){
    margin-top: 7rem;
    width: 100%;
    margin-bottom: 5rem;
  }
`

const ImgDiv = styled.div`
  width: 15rem;
  height: 15rem;
  margin-bottom: 1rem;
  border-radius: 50%;
  box-shadow: 5px 5px 10px rgba(3, 3, 3, 0.7), -5px -5px 10px rgba(3, 3, 3, 0.7);
  overflow: visible;
  &.active {
    animation: rotate-img 6s linear infinite;
    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
  @keyframes rotate-img {
    to {
      transform: rotate(360deg);
    }
  }
  @media screen and (min-width: 768px){
    width: 19rem;
    height: 19rem;
  }
  @media screen and (min-width: 1024px){
    width: 20rem;
    height: 20rem;
    margin-bottom: 1rem;
  }
`

const SongImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

const LoadingDiv = styled.div`
  width: 100%;
  height: 100%;
`

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: 1px;
  align-items: center;
`

const Title = styled.h2`
  margin-bottom: 0.5rem;
  color: #2e2e2e;
`
const Artist = styled.h3`
  color: #696969;
`

