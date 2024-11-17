"use client"

import React from 'react'
import {Gamelogo, BgGame, cartat, Sife} from '../images/ImagesContainer.js'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const FasilWaNaeod = () => {
    const bar = useRef(null);
    let counter = {Value : 0};
    const [counterValue,setCounterValue] = useState(counter.Value)
    useGSAP(()=>{
        gsap.to(bar.current, { width: "100%", duration: 5, ease: "slow(1,2,false)"})
        gsap.to(counter, {Value: 100,duration : 5,onUpdate: ()=>{setCounterValue(counter.Value)}})
        console.log(counter);
    })
  return (
    <div className="h-screen w-screen overflow-hidden object-fill relative">
      <Image src={BgGame} alt="bgGameImage" objectFit="cover" className=" absolute -z-10" layout="fill" ></Image>
      <div className="h-screen w-screen flex items-center justify-center flex-col">
        <Image src={Gamelogo} alt="GameLogo" className=" w-[40%] "></Image>
        <div className="w-[26%] flex justify-between gap-8 items-center">
          <Image src={cartat} alt='cartat'></Image>
        </div>
          <p className='font-MadievalSharp text-white text-xl shadow-black mt-[4%] mb-[1%]'>{Math.floor(counterValue)}%/100%</p>
        <div className='backdrop-blur-xl overflow-hidden bg-white bg-opacity-5   border-2 rounded-full border-black h-[2%] w-[40%]'>
          <div ref={bar} className='bg-gradient-to-r from-buttonsColor to-logoColor w-[0%] h-full relative'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FasilWaNaeod