"use client"
import React, { useEffect, useState } from 'react'
import { BgPlayGround, CardBack, wahdtb9 } from '../images/ImagesContainer'
import Image from 'next/image';
import SettingsButton from '../Components/SettingsButton';
import FullScButton from '../Components/FullScreenButton';
import CardMaker from '../Components/CardMaker';
import PlayerProfileHolder from '../Components/PlayerProfileHolder';
import Table from '../Components/Table';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
const Page = () => {
    // refs //
    const BgPlayGroundRef = useRef(null);
    const cardsContainer = useRef(null);
    //---------------------------------------------//
    const [imageHeight, setImageHeight] = useState(100);
    const [ClientSide,setClientSide] = useState(false);
    const [playerNumber, setPlayerNumber] = useState(2);
    const [playerhand, setPlayerhand] = useState(null);
    let TablePosition = "";
    function handleTablePositionChange(TablePos){
        TablePosition = TablePos;
    }
    useEffect(()=>{
        setPlayerhand([{CardNumber:1,CardType: "sife"},{CardNumber:2,CardType: "gur3"},{CardNumber:3,CardType: "dhb"},{CardNumber:4,CardType: "tb9"},{CardNumber:5,CardType: "sife"},{CardNumber:6,CardType: "tb9" }])
        const params = new URLSearchParams(window.location.search)
        if(window.innerWidth / window.innerHeight < 1.61){
            const windowAspectRatio =  window.innerWidth / window.innerHeight;
            const differenceSize = 1.61 - windowAspectRatio; 
            setImageHeight(Math.round(100 - (differenceSize / 0.014)));
        }
        setPlayerNumber(params.get("Players"))
        setClientSide(true);
    },[]);
    let classname = "";
    let count = 0;
    function HandleClick(ClassName,cardpos,cardPosPercentage){      
      if(classname === ""){
        classname = ClassName
        gsap.to(`.${ClassName}`, {duration: 0.2, y: "-40%" , ease: "linear"})
        count++;
        console.log(count)
    }else if(classname === ClassName){
        const timeline = gsap.timeline()
        const tableMiddleY = (TablePosition.bottom - cardpos.bottom) * 0.95
        const tableMiddleX = (TablePosition.x - cardpos.x) - (cardsContainer.current.getBoundingClientRect().width * (cardPosPercentage.left / 100))
        const randomRotateDeg = Math.random() * 90
        timeline
        .to(`.${ClassName}`, {duration: 0.5,y: tableMiddleY, ease: "power2.out"})
        .to(`.${ClassName}`, {duration: 1, y: (tableMiddleY), x: (tableMiddleX),delay:0.3,rotate: randomRotateDeg ,scale: 0.8, ease: "power2.out"})
        classname = "";
        count = 0;
      }else{
        count = 0;
        console.log(count)
        gsap.to(`.${ClassName}`, {duration: 0.1, y: "-40%" , ease: "linear"})
        gsap.to(`.${classname}`, {duration:0.1, y: 0, ease: "linear"})
        classname = ClassName;
      }
    }

  return (
    <>
        {
            ClientSide && (
                <div className=' h-screen w-screen backdrop-blur-xl bg-black overflow-hidden'>
                    <Image src={BgPlayGround} alt='BgPlayGround' style={{height:`${imageHeight}%`}} className="object-cover absolute top-1/2 -translate-y-1/2"></Image>
                    <div ref={BgPlayGroundRef} style={{height: `${imageHeight}%`}} className="overflow-hidden object-cover relative top-1/2 -translate-y-1/2">
                        <SettingsButton/>
                        <FullScButton route='PlayGround'/>
                        <PlayerProfileHolder playerNumber={playerNumber}/>
                        <button>
                            <Image alt='ChangeCard' className=' absolute top-1/2 -translate-y-[54%] left-[37.6%] w-[9vw] -translate-x-[100%]' src={CardBack}></Image>
                            <Image alt='ChangeCard' className=' absolute top-1/2 -translate-y-[54%] left-[37.6%] w-[9vw] -translate-x-[100%]' src={CardBack}></Image>
                            <Image alt='ChangeCard' className=' absolute top-1/2 -translate-y-[54%] left-[37.6%] w-[9vw] -translate-x-[100%]' src={CardBack}></Image>
                        </button>
                        <Table handleTablePositionChange={handleTablePositionChange}/>
                        <div ref={cardsContainer} className='min-w-[8vw] h-[27%]  absolute left-[49%] -translate-x-1/2 flex bottom-[-5%]'>
                            {
                                playerhand && (
                                    
                                    playerhand.slice(0,Math.round(playerhand.length / 2)).map((card, index) => {
                                        const leftRemoveRate = 90 - (playerhand.length * 6);
                                        const bottomRemoveRate = 0.2 - (playerhand.length * 0.01) ;
                                        const zIndex = playerhand.length - index;
                                        const left = (Math.round(playerhand.length / 2) - index) * leftRemoveRate;
                                        const bottom = (0 + index) * bottomRemoveRate;
                                        const rotate = (Math.round(playerhand.length / 2) - index);
                                        return (
                                            <CardMaker 
                                                key={index}
                                                CardNumber={card.CardNumber}
                                                CardType={card.CardType}
                                                left={left}
                                                bottom={bottom}
                                                zIndex={zIndex}
                                                rotate={rotate}
                                                HandleClick={HandleClick}
                                             />
                                        )
                                        
                                    })
                                )
                            }
                            {
                                playerhand && (
                                    
                                    playerhand.slice(Math.round(playerhand.length / 2,playerhand.length)).map((card, index) => {
                                        const leftRemoveRate = 90 - (playerhand.length * 6);
                                        const bottomRemoveRate = 0.2 - (playerhand.length * 0.01) ;
                                        const zIndex = Math.floor(playerhand.length / 2) - index;
                                        const left = (0 - index) * leftRemoveRate;
                                        const bottom = (Math.round(playerhand.length / 2) - index) * bottomRemoveRate;
                                        const rotate = (0 - index);
                                        return (
                                            <CardMaker 
                                                key={index}
                                                CardNumber={card.CardNumber}
                                                CardType={card.CardType}
                                                left={left}
                                                bottom={bottom}
                                                zIndex={zIndex}
                                                rotate={rotate}
                                                HandleClick={HandleClick}
                                             />
                                        )
                                        
                                    })
                                )
                            }
                        </div>
                    </div>
                </div>
            )
        }
    </>
  )
}

export default Page