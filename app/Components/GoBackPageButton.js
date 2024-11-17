import React from 'react'
import { GoBackPageButton } from '../images/ImagesContainer'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
const GoBackPage = () => {
    const router = useRouter();
  return (
    <button className="w-[4%] absolute top-[2%] left-[1%]" onClick={() =>{router.back()}}>
        <Image src={GoBackPageButton} alt='FullSreenbutton'></Image>
    </button>
  )
}

export default GoBackPage