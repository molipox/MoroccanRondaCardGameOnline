"use client"

import React from 'react'
import {Gamelogo,fourPlayers ,treePlayers ,twoPlayers,BgGame, FullSc,ExitFullSc, GoBackPageButton } from '../images/ImagesContainer.js'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link.js'
import FullScButton from '../Components/FullScreenButton.js'
import GoBackPage from '../Components/GoBackPageButton.js'
const Page = () => {
  return (
    <div className="h-screen w-screen overflow-hidden object-fill relative">
      <Image src={BgGame} alt="bgGameImage" objectFit="cover" className=" absolute -z-10" layout="fill" ></Image>
      <div className="h-screen w-screen flex items-center justify-center flex-col">
        <Image src={Gamelogo} alt="GameLogo" className=" w-[40%] "></Image>
        <div className="w-[60%]  mt-[5%] mb-[5%] flex justify-between gap-8 items-center">
          <Link href={`/PlayGround?Players=${2}`} className=" rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl 3xl:rounded-3xl Box-shadow Box-shadow-inset shadow-black aspect-[5/1] flex justify-center items-center bg-buttonsColor hover:bg-buttonHoverColor ease-in duration-100 font-Garmania text-3xl text-inner-shadow">
            <Image src={twoPlayers} className=" w-[43%] mt-1" alt="Start Game"></Image>
          </Link>
          <Link href={`/PlayGround?Players=${3}`} className=" rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl 3xl:rounded-3xl Box-shadow Box-shadow-inset shadow-black aspect-[5/1] flex justify-center items-center bg-buttonsColor hover:bg-buttonHoverColor ease-in duration-100 font-Garmania text-3xl text-inner-shadow">
            <Image src={treePlayers} className="w-[43%] mt-1" alt="Start Game"></Image>
          </Link>
          <Link href={`/PlayGround?Players=${4}`} className=" rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl 3xl:rounded-3xl Box-shadow Box-shadow-inset shadow-black aspect-[5/1] flex justify-center items-center bg-buttonsColor hover:bg-buttonHoverColor ease-in duration-100 font-Garmania text-3xl text-inner-shadow">
            <Image src={fourPlayers} className="w-[43%] mt-1" alt="Start Game"></Image>
          </Link>
        </div>
      </div>
      <p className="font-Garmania text-white absolute right-[2%] bottom-[3%] text-[1.5vw] ">&copy; Copyright Saad Faiz 2024</p>
      <FullScButton/>
      <GoBackPage/>
    </div>
  )
}

export default Page