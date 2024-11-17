"use client"

import Image from "next/image";
import { GameRules, BgGame, Gamelogo, StartGame } from "./images/ImagesContainer.js";
import gsap, { Power2 } from "gsap";
import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from '@gsap/react';
import FullScButton from "./Components/FullScreenButton.js";
export default function Home() {
  const ButtonsContainer = useRef(null);
  const LogoContainer = useRef(null);
  useGSAP(() => {
    gsap.from(ButtonsContainer.current , {y: "300%", duration: 1 , ease: Power2.easeOut})
    gsap.from(LogoContainer.current,{y: "-300%", duration: 1 , ease: Power2.easeOut})
  })


  return (
    <div className="h-screen w-screen overflow-hidden object-fill relative">
      <Image src={BgGame} alt="bgGameImage" priority objectFit="cover" className=" absolute -z-10" layout="fill" ></Image>
      <div className="h-screen w-screen flex items-center justify-center flex-col">
        <Image ref={LogoContainer} src={Gamelogo} alt="GameLogo" className=" w-[40%] "></Image>
        <div ref={ButtonsContainer} className="w-[25%]  mt-[5%] mb-[5%] flex flex-col justify-center items-center">
          <Link href={"/StartGame"} className="w-full rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl 3xl:rounded-3xl Box-shadow Box-shadow-inset shadow-black aspect-[5.7/1] flex justify-center items-center bg-buttonsColor hover:bg-buttonHoverColor ease-in duration-100 font-Garmania text-3xl text-inner-shadow">
            <Image src={StartGame} className="w-1/2" alt="Start Game"></Image>
          </Link>
          <button className="w-full mt-[7%] rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl 2xl:rounded-2xl 3xl:rounded-3xl Box-shadow Box-shadow-inset shadow-black aspect-[5.7/1] flex justify-center items-center bg-buttonsColor hover:bg-buttonHoverColor ease-in duration-100 font-Garmania text-3xl text-inner-shadow">
            <Image src={GameRules} className=" w-1/2" alt="Start Game"></Image>
          </button>
        </div>
      </div>
      <p className="font-Garmania text-white absolute right-[2%] bottom-[3%] text-[1.5vw] ">&copy; Copyright Saad Faiz 2024</p>
      <FullScButton/>
    </div>
  );
}


