import React from 'react';
import styled from 'styled-components';


const Library = ({ allSongs, openLibrary, currentSong, pickSong })=>{

  return (
    <AsideContainer className={openLibrary ? `open` : ``}>
      {allSongs.map((item)=>{
        const { id, title, artist, img } = item;
        return (
          <SongDiv onClick={pickSong} key={id} className={id === currentSong.id ? 'current' : ''}>
            <ImgDiv>
              <SongImg src={img} alt={`${artist} - ${title}`} />
            </ImgDiv>
            <InfoDiv>
              <Title>{title}</Title>
              <Artist>{artist}</Artist>
            </InfoDiv>
          </SongDiv>
        )
      })}
    </AsideContainer>
  )
}

export default Library;


const AsideContainer = styled.aside` 
  position: fixed;
  top: 0;
  left: 0;
  /* inset: 0; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f0f0f0;
  overflow-y: scroll;
  transition: transform 0.5s ease;
  transform: translateX(-100%);

  &.open {
  transform: translateX(0%);
  }
  @media screen and (min-width: 1024px){
    width: 25%;
    filter: drop-shadow(5px 0px 15px #24182266);
  }
  @media screen and (min-height: 1300px){
    width: 30%;
    filter: drop-shadow(5px 0px 15px #24182266);
  }
`

const SongDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem;
  transition: background 0.4s ease;
  cursor: pointer;
  &:first-of-type {
    margin-top: 5.5rem;
    @media screen and (min-width: 1024px){
      margin-top: 0;
    }
  }
  &:hover {
    background: #e1ddf0;
  }
  &.current {
    background: #cec6ec;
  }
  @media screen and (min-width: 1024px){
    padding: 2.5rem;  
  }
`

const ImgDiv = styled.div`
  width: 10rem;
  margin-right: 1rem;
  @media screen and (min-width: 1024px){
    width: 8rem;
  }
`

const SongImg = styled.img`
    width: 10rem;
  object-fit: cover;
  @media screen and (min-width: 1024px){
    width: 8rem;
  }
`

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: 1px;
`

const Title = styled.h2`
  margin-bottom: 0.5rem;
  color: #2e2e2e;
  @media screen and (min-width: 1024px){
    font-size: 1.3rem;
  }
`
const Artist = styled.h3`
  color: #5a5a5a;
  @media screen and (min-width: 1024px){
    font-size: 1rem;
  }
`