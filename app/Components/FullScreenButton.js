"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import { FullSc,ExitFullSc, RedFullSc, RedExitFullSc } from '../images/ImagesContainer';
import Image from 'next/image';
const FullScButton = ({route = "NotPlayGround"}) => {
  const [FullScreen, setFullScreen] = useState(null);
  useEffect(() => {
    if(FullScreen === true){
      document.documentElement.requestFullscreen();
    }else if(FullScreen === false){
      document.exitFullscreen();
    }
  },[FullScreen])
  return (
    <button className="w-[4%] absolute top-[2%] right-[1%]" onClick={() =>{setFullScreen(prev => !prev)}}>
      {
        route === "NotPlayGround" ? (
          <Image src={FullScreen === true ? (ExitFullSc):(FullSc)} alt='FullSreenbutton'></Image>
        ):(
          <Image src={FullScreen === true ? (RedExitFullSc):(RedFullSc)} alt='FullSreenbutton'></Image>
        )
      }
    </button>
  )
}

export default FullScButton