import React, { useState, useRef, useEffect } from "react";
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from "./Navbar";
import Library from "./Library";
import Song from "./Song";
import Player from  './Player';
import data from "./data";

function App() {
  const [openLibrary, setOpenLibrary] = useState(false);
  const [allSongs, setAllSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(allSongs[0]);
  const [playing, setPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({current: 0, duration: 0});
  const audioElement = useRef();

  useEffect(()=>{
    setAllSongs(data);
  }, []);


  const playAudio = ()=>{
    let audio = audioElement.current;
    if(!playing){
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  const switchSong = async (e)=>{
    let target = e.target.getAttribute('title');
    let currentIndex = allSongs.findIndex((song)=> song.id === currentSong.id);
    let audio = audioElement.current;
    if(target === 'forward'){
      if(currentIndex === allSongs.length - 1){
        await setCurrentSong(allSongs[0]);
        playing && audio.play();
      } else {
        await setCurrentSong(allSongs[currentIndex + 1]);
        playing && audio.play();
      }
    } 
    if(target === 'back') {
      if(currentIndex === 0) {
        await setCurrentSong(allSongs[allSongs.length - 1]);
        playing && audio.play();
      } else {
        await setCurrentSong(allSongs[currentIndex - 1]);
        playing && audio.play();
      }
    }
  } 

  const nextSong = async ()=>{
    let audio = audioElement.current;
    let currentIndex = allSongs.findIndex((song)=> song.id === currentSong.id);
    await setCurrentSong(allSongs[currentIndex + 1]);
    audio.play();
  }

  const pickSong = async (e)=>{
    let audio = audioElement.current;
    let target = e.currentTarget;
    let parent = [...target.parentElement.children];
    let chosen = parent.indexOf(target);
    await setCurrentSong(allSongs[chosen]);
    playing && audio.play();
  }

  const getInfo = ()=>{
    let audio = audioElement.current;
    let currentTime = audio.currentTime;
    let duration = audio.duration;
    setSongInfo({current: currentTime, duration: duration});
  }

  return (
    <Main className={openLibrary ? 'squeeze' : ''}>
      <GlobalStyle/>
      <Navbar openLibrary={openLibrary} setOpenLibrary={setOpenLibrary}/>
      <Song currentSong={currentSong} playing={playing}/>
      <Player playing={playing} currentSong={currentSong} setCurrentSong={setCurrentSong} audioElement={audioElement} playAudio={playAudio}getInfo={getInfo} songInfo={songInfo} setSongInfo={setSongInfo} switchSong={switchSong} nextSong={nextSong}/>
      <Library allSongs={allSongs} openLibrary={openLibrary} currentSong={currentSong} pickSong={pickSong}/>
    </Main>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  *::-webkit-scrollbar {
    width: 0.5rem; 
  }
  *::-webkit-scrollbar-thumb {
    border: none;
    border-radius: 0.5rem;
    background: #dbdbdb;
  }
  *:focus{
    outline-offset: 0.5rem;
    outline-width: 1px;
    outline-color: rgba(0,0,0,0.1);
  }
  `

const Main = styled.main`
  height: 100vh;
  width: 100%;
  font-family: 'Roboto Condensed', sans-serif;
  background: rgb(221,222,231);
background: radial-gradient(circle, rgba(221,222,231,1) 0%, rgba(172, 146, 202, 0.4) 100%);
  color: #141414;
  transition: padding 0.4s ease;
  overflow-x: hidden;
  &.squeeze {
    padding-left: 25%;
  }
`