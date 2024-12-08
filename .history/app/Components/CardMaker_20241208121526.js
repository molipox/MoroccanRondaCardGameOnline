"use client"
import React, { useRef, useState } from 'react';
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
import { Draggable } from 'gsap/all';
const images = {
  dhb: [wahdDhb, jojDhb, tlataDhb, rab3aDhb, khamsaDhb, setaDhb, sab3aDhb, null, null, axraDhb, hdaxDhb, tnachDhb],
  gur3: [wahdgu3, jojgu3, tlatagu3, rab3agu3, khamsagu3, setagu3, sab3agu3, null, null, axragu3, hdaxgu3, tnachgu3],
  sife: [wahdsife, jojsife, tlatasife, rab3asife, khamsasife, setasife, sab3asife, null, null, axrasife, hdaxsife, tnachsife],
  tb9: [wahdtb9, jojtb9, tlatatb9, rab3atb9, khamsatb9, setatb9, sab3atb9, null, null, axratb9, hdaxtb9, tnachtb9],
};

                                                
const CardMaker = ({ref, CardNumber, CardType, zIndex, left, bottom, rotate, HandleClick, ChangeCards, cardsContainer, TablePosition, imageHeight, index,HandleDrag, handleRef,handleTableMiddle }) => {
  const card = useRef(null);
  const imageSrc = images[CardType]?.[CardNumber - 1]; 
  let cardBottom;
  let ChangeCardBottom;
  let cardX;
  let ChangeCardX;
  let cardsContainerWidth;
  useEffect(() => {
    cardBottom = card.current.getBoundingClientRect().bottom;
    ChangeCardBottom = ChangeCards.current.getBoundingClientRect().bottom;
    cardX = card.current.getBoundingClientRect().x;
    ChangeCardX = ChangeCards.current.getBoundingClientRect().x;
    cardsContainerWidth = cardsContainer.current.getBoundingClientRect().width;
    console.log("useeffect 1 executed")
    const tableMiddleY = (TablePosition.bottom - cardBottom) * 0.95;
        console.log("tabposition",TablePosition)
        console.log( "card bottom",cardBottom)
        const tableMiddleX = (TablePosition.x - cardX) / 2 - (cardsContainerWidth * (left / 100));
  },[]);
  useGSAP(()=>{
        
        const randomRotateDeg = Math.random() * 90;
        handleRef(card.current,index)
        gsap.registerPlugin(Draggable);
            console.log("first condition worked")
            Draggable.create(`.Card${CardNumber}${CardType}`,{
                type: "x,y",
                bounds: window,
                zIndexBoost: false,
                onDragStart: function (){
                    console.log(this.x)
                    console.log(tableMiddleX)
                    console.log("drag start condition worked")
                  },
                  onDragEnd:function (){    
                  console.log(`.Card${CardNumber}${CardType}`)
                  console.log(-window.innerHeight * ( imageHeight / 100 ) / 4)              
                  console.log(this.y)              
                  if((window.innerHeight * ( imageHeight / 100 ) / 4) < -this.y ){      
                    gsap.to(`.Card${CardNumber}${CardType}`, { duration: 0.75, x: tableMiddleX, y: tableMiddleY, rotate: randomRotateDeg, scale: 0.8, ease: "power1.out" });
                    console.log(`.Card${CardNumber}${CardType}`)
                    setTimeout(() => {
                      HandleDrag(index)
                      console.log(" x of joj gur3", gsap.getProperty(".Card2gur3","x"))
                      console.log(`.Card${CardNumber}${CardType}`)
                    }, 750);
                    setTimeout(() => {
                      gsap.to(`.Card2gur3`, { duration: 0.25, x: 0, y: 0, ease: "power1.out" });
                      }, 750);
                  }else{
                    gsap.to(`.Card${CardNumber}${CardType}`, { duration: 0.25, x: 0, y: 0, ease: "power1.out" });
                  }
                }    
            });        
    },[cardX])
    useGSAP(() => {
      const tableMiddleY = (ChangeCardBottom - cardBottom)
      const tableMiddleX = (ChangeCardX - cardX) - (cardsContainerWidth * (left / 100));
      gsap.set(`.Card${CardNumber}${CardType}`, { display: "block",delay:index/5 }); 
      gsap.from(`.Card${CardNumber}${CardType}`, {duration:0.5,x: tableMiddleX,delay:index/5, y: tableMiddleY,ease:"power1.out",scale:0.8})
    },[]);
  if(!zIndex && zIndex !== 0) return console.error("CardMaker component Need a zIndex Attribute")
  if(!left && left !== 0) return console.error("CardMaker component Need a left Attribute")
  if(!rotate && rotate !== 0) return console.error("CardMaker component Need a rotate Attribute")
  if(!bottom && bottom !== 0) return console.error("CardMaker component Need a bottom Attribute")
  if (!imageSrc) return null;
  return (
    <button  onClick={() => {HandleClick(`Card${CardNumber}${CardType}`,card.current.getBoundingClientRect(),{left: left,bottom: bottom,zIndex: zIndex},index)}}>
      <Image
      ref={card}
      alt="ChangeCard"
      className={`rounded-lg h-[100%] absolute shadow-md shadow-black ${CardType}${CardNumber}${index} Card${CardNumber}${CardType} hidden`}
      src={imageSrc}
      style={{zIndex: `${zIndex}`,
              left: `${left}%`,
              bottom: `${bottom}rem`,
              transform: `rotate(${rotate}deg)`,}}
      />
    </button>
  );
};

export default CardMaker;
