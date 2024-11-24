import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect } from 'react';
import {
  wahdDhb, jojDhb, tlataDhb, rab3aDhb, khamsaDhb, setaDhb, sab3aDhb, axraDhb, hdaxDhb, tnachDhb,
  wahdgu3, jojgu3, tlatagu3, rab3agu3, khamsagu3, setagu3, sab3agu3, axragu3, hdaxgu3, tnachgu3,
  wahdsife, jojsife, tlatasife, rab3asife, khamsasife, setasife, sab3asife, axrasife, hdaxsife, tnachsife,
  wahdtb9, jojtb9, tlatatb9, rab3atb9, khamsatb9, setatb9, sab3atb9, axratb9, hdaxtb9, tnachtb9
} from '../images/ImagesContainer';

const images = {
  dhb: [wahdDhb, jojDhb, tlataDhb, rab3aDhb, khamsaDhb, setaDhb, sab3aDhb, null, null, axraDhb, hdaxDhb, tnachDhb],
  gur3: [wahdgu3, jojgu3, tlatagu3, rab3agu3, khamsagu3, setagu3, sab3agu3, null, null, axragu3, hdaxgu3, tnachgu3],
  sife: [wahdsife, jojsife, tlatasife, rab3asife, khamsasife, setasife, sab3asife, null, null, axrasife, hdaxsife, tnachsife],
  tb9: [wahdtb9, jojtb9, tlatatb9, rab3atb9, khamsatb9, setatb9, sab3atb9, null, null, axratb9, hdaxtb9, tnachtb9],
};

const CardMaker = ({ CardNumber, CardType, zIndex, left, bottom, rotate, HandleClick }) => {
  const card = useRef(null);
  const imageSrc = images[CardType]?.[CardNumber - 1]; 
  if(!zIndex && zIndex !== 0) return console.error("CardMaker component Need a zIndex Attribute")
  if(!left && left !== 0) return console.error("CardMaker component Need a left Attribute")
  if(!rotate && rotate !== 0) return console.error("CardMaker component Need a rotate Attribute")
  if(!bottom && bottom !== 0) return console.error("CardMaker component Need a bottom Attribute")
  if (!imageSrc) return null;
  return (
    <button ref={card} onClick={() => {HandleClick(`Card${CardNumber}${CardType}`,card.current.getBoundingClientRect(),{left: left,bottom: bottom})}}>
      <Image
      alt="ChangeCard"
      className={`aspect-[1/1.61] rounded-lg absolute shadow-md shadow-black Card${CardNumber}${CardType}`}
      src={imageSrc}
      style={{zIndex: `${zIndex}`,
              left: `${left}%`,
              bottom: `${bottom}rem`,
              transform: `rotate(${rotate}deg)`,
              transition: 'transform 0.2s ease, left 0.2s ease, bottom 0.2s ease'}}
      />
    </button>
  );
};

export default CardMaker;
