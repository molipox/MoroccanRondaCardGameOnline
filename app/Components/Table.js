import React, { useEffect, useRef } from 'react'
import { wahdtb9 } from '../images/ImagesContainer'
import Image from 'next/image'
const Table = ({handleTablePositionChange}) => {
  const tablecontainer = useRef(null);
  useEffect(() => 
    handleTablePositionChange(tablecontainer.current.getBoundingClientRect())
  ,[])
  return (
    <div >
        <Image ref={tablecontainer} alt='ChangeCard' className=' rounded-lg absolute top-1/2 -translate-y-[54%] left-[50%] w-[6.3vw] shadow-md shadow-black -translate-x-[50%]' src={wahdtb9}></Image>
        <Image alt='ChangeCard' className=' rounded-lg rotate-[230deg] absolute top-1/2 -translate-y-[54%] left-[50%] w-[6.3vw] shadow-md shadow-black -translate-x-[50%]' src={wahdtb9}></Image>
        <Image alt='ChangeCard' className=' rounded-lg rotate-[130deg] absolute top-1/2 -translate-y-[54%] left-[50%] w-[6.3vw] shadow-md shadow-black -translate-x-[50%]' src={wahdtb9}></Image>
        <Image alt='ChangeCard' className=' rounded-lg rotate-[32deg] absolute top-1/2 -translate-y-[54%] left-[50%] w-[6.3vw] shadow-md shadow-black -translate-x-[50%]' src={wahdtb9}></Image>
        <Image alt='ChangeCard' className=' rounded-lg rotate-[0deg] absolute top-1/2 -translate-y-[54%] left-[50%] w-[6.3vw] shadow-md shadow-black -translate-x-[50%]' src={wahdtb9}></Image>
    </div>
  )
}

export default Table