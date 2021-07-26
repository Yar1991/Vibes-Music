import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward, IoIosPlay, IoIosPause } from 'react-icons/io';

const Player = ({ playing, currentSong, audioElement, playAudio, getInfo, songInfo, setSongInfo, switchSong, nextSong })=>{

  const getTime = (time)=>{
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
  }

  const updateRange = (e)=>{
    let val = e.target.value;
    audioElement.current.currentTime = val;
  }

  const updateTime = ()=>{
    let audio = audioElement.current;
    setSongInfo({...songInfo, current: audio.currentTime});
  }


  return (
    <PlayerDiv>
      <audio src={currentSong.song} ref={audioElement} onLoadedMetadata={getInfo} onTimeUpdate={updateTime} onEnded={nextSong} ></audio>
      <RangeDiv>
        <TimeSpan>{!songInfo.current ? '0:00' : getTime(songInfo.current)}</TimeSpan>
        <RangeWrapper>
        <RangeHide style={{left: `${songInfo.current / songInfo.duration * 100}%`}}></RangeHide>
        <Range onChange={updateRange} type="range" name="track" min='0' max={songInfo.duration}  value={songInfo.current} style={{ background: `linear-gradient(to right, ${currentSong.colors[0]}, ${currentSong.colors[1]})`}}/> 
        </RangeWrapper>
        <TimeSpan>{!songInfo.duration ? '0:00' : getTime(songInfo.duration)}</TimeSpan>
      </RangeDiv>
      <ButtonsDiv>
        <ControlBtn onClick={switchSong} title='back'><IoIosArrowBack style={{pointerEvents: 'none'}}/></ControlBtn>
        <ControlBtn onClick={playAudio} title={playing ? 'pause' : 'play'}>{playing ? <IoIosPause style={{pointerEvents: 'none', fontSize: '4rem'}}/> : <IoIosPlay style={{pointerEvents: 'none', fontSize: '4rem'}}/>}</ControlBtn>
        <ControlBtn onClick={switchSong} title='forward'><IoIosArrowForward style={{pointerEvents: 'none'}}/></ControlBtn>
      </ButtonsDiv>
    </PlayerDiv>
  )  

}

export default Player;


const PlayerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  @media screen and (min-width: 1024px){
    width: 50%;
    margin: auto;
    margin-top: 2rem;
  }
  @media screen and (min-height: 1300px){
    width: 80%;
  }
`

const RangeDiv = styled.div`
  width: 90%;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
`

const Range = styled.input.attrs({ type: 'range' })`
  width: 100%;
  padding: 0.1rem 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  transition: background 0.4s ease;
  pointer-events: all;


  &:hover {
  background: #b1c9cf;
  }

  &::-webkit-slider-thumb {
    opacity: 0;
  }
  &::-moz-range-thumb {
    opacity: 0;
  }
`

const RangeWrapper = styled.div`
  width: 100%;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`

const RangeHide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #f1ecf5;
  pointer-events: none;
`


const ButtonsDiv = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 3rem;
`

const ControlBtn = styled.button`
  background: none;
  border: none;
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e1e1f;
  cursor: pointer;
  will-change: transform;
  transition: background 0.4s ease, transform 0.4s ease;

  &:hover {
    color: #424042;
    transform: scale(1.05);
  }
` 
const TimeSpan = styled.span`
  font-size: 1.2rem;
  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }
  &:last-of-type {
    margin-left: 0.5rem;
  }
`
