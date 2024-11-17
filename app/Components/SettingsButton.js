"use client"

import React from 'react'
import { SettingsButtonImg } from '../images/ImagesContainer'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
const SettingsButton = () => {
    const router = useRouter();
  return (
    <button className="w-[5%] absolute top-[2%] left-[1%]">
        <Image src={SettingsButtonImg} alt='FullSreenbutton'></Image>
    </button>
  )
}

export default SettingsButton