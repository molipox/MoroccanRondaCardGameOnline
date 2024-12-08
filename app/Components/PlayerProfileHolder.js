import React from 'react'
import { CadrePlayerName, CatProfile } from '../images/ImagesContainer'
import Image from 'next/image'
const PlayerProfileHolder = ({playerNumber}) => {
  return (
    <div>
        <div className='w-[20%] left-[10%] bottom-[1%] absolute flex justify-center items-center'>
            <Image src={CadrePlayerName} alt='This is the Cadre Of The Player' className='w-full h-full'></Image>
            <p className=' text-white text-center z-0 text-[0.9vw] font-Garmania absolute mt-[0.7%] translate-x-[10%]'>profile 1</p>
            <Image src={CatProfile} alt='Profile Picture'  className=' w-[16%] -translate-x-[202%] translate-y-[20%] absolute'></Image>
        </div>
        <div className='w-[20%] right-[8%] top-[1%] absolute flex justify-center items-center'>
            <Image src={CadrePlayerName} alt='This is the Cadre Of The Player' className='w-full h-full'></Image>
            <p className=' text-white text-center text-[0.9vw]  font-Garmania absolute mt-[0.7%] translate-x-[10%]'> profile 2</p>
            <Image src={CatProfile} alt='Profile Picture'  className=' w-[16%] -translate-x-[202%] translate-y-[20%] absolute'></Image>
        </div>
        {
            playerNumber >= 3 && (
                <div className='w-[20%] top-[13%] left-[1%] absolute flex justify-center items-center'>
                    <Image src={CadrePlayerName} alt='This is the Cadre Of The Player' className='w-full h-full'></Image>
                    <p className=' text-white text-center text-[0.9vw]  font-Garmania absolute mt-[0.7%] translate-x-[10%]'>Saad Faiz</p>
                    <Image src={CatProfile} alt='Profile Picture'  className=' w-[16%] -translate-x-[202%] translate-y-[20%] absolute'></Image>
                </div>
            )
        }
        {
            playerNumber == 4 && (
                <div className='w-[20%] bottom-[13%] right-[1%] absolute flex justify-center items-center'>
                    <Image src={CadrePlayerName} alt='This is the Cadre Of The Player' className='w-full h-full'></Image>
                    <p className=' text-white text-center text-[0.9vw]  font-Garmania absolute mt-[0.7%] translate-x-[10%]'>profile 4</p>
                    <Image src={CatProfile} alt='Profile Picture'  className=' w-[16%] -translate-x-[202%] translate-y-[20%] absolute'></Image>
                </div>
            )
        }
    </div>
  )
}

export default PlayerProfileHolder