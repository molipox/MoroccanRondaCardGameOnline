"use client"
import React, { useEffect, useState } from 'react'
import { BgPlayGround, CadrePlayerName } from '../images/ImagesContainer'
import Image from 'next/image';
import SettingsButton from '../Components/SettingsButton';
import FullScButton from '../Components/FullScreenButton';
import { useSearchParams } from 'next/navigation';
const Page = () => {
    const [imageHeight, setImageHeight] = useState(100);
    const [ClientSide,setClientSide] = useState(false);
    const [playerNumber, setPlayerNumber] = useState(2);
    useEffect(()=>{
        const params = new URLSearchParams(window.location.search)
        if(window.innerWidth / window.innerHeight < 1.61){
            const windowAspectRatio =  window.innerWidth / window.innerHeight;
            const differenceSize = 1.61 - windowAspectRatio; 
            setImageHeight(Math.round(100 - (differenceSize / 0.014)));
        }
        setPlayerNumber(params.get("Players"))
        setClientSide(true);
    },[]);
  return (
    <>
        {
            ClientSide && (
                <div className=' h-screen w-screen backdrop-blur-xl bg-black overflow-hidden'>
                    <Image src={BgPlayGround} alt='BgPlayGround' style={{height:`${imageHeight}%`}} className="object-cover absolute top-1/2 -translate-y-1/2"></Image>
                    <div style={{height: `${imageHeight}%`}} className="object-cover relative top-1/2 -translate-y-1/2">
                        <SettingsButton/>
                        <FullScButton route='PlayGround'/>
                        <div className='w-[20%] left-[10%] bottom-[1%] absolute'>
                            <Image src={CadrePlayerName} alt='This is the Cadre Of The Player' className='w-full h-full'></Image>
                            <p className=' text-white text-center z-20 font-Garmania absolute mt-[0.7%] translate-x-[10%]'></p>
                        </div>
                        <div className='w-[20%] right-[8%] top-[1%] absolute flex justify-center items-center'>
                            <Image src={CadrePlayerName} alt='This is the Cadre Of The Player' className='w-full h-full'></Image>
                            <p className=' text-white text-center z-20 font-Garmania absolute mt-[0.7%] translate-x-[10%]'></p>
                        </div>
                        {
                            playerNumber >= 3 && (
                                <div className='w-[20%] top-[13%] left-[1%] absolute'>
                                    <Image src={CadrePlayerName} alt='This is the Cadre Of The Player'></Image>
                                </div>
                            )
                        }
                        {
                            playerNumber == 4 && (
                                <div className='w-[20%] bottom-[13%] right-[1%] absolute'>
                                    <Image src={CadrePlayerName} alt='This is the Cadre Of The Player'></Image>
                                </div>
                            )
                        }

                    </div>
                </div>
            )
        }
    </>
  )
}

export default Page