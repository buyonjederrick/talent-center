'use client';

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import React from "react";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";
import EmblaCarousel from "../inputs/EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";
import { CldVideoPlayer } from "next-cloudinary";
import VideoPlayer from "../VideoPlayer";


interface ListingHeadProps {
    title: string;
    locationValue: string;
    imageSrc: string;
    MediaSrc: string[];
    id: string;
    currentUser?: SafeUser| null;
}





const ListingHead: React.FC<ListingHeadProps> = ({
    title,
    locationValue,
    imageSrc,
    MediaSrc,
    id,
    currentUser
}) => {
    const { getByValue } = useCountries();
    const OPTIONS: EmblaOptionsType = {};
    const SLIDE_COUNT = MediaSrc.length;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

    const location = getByValue(locationValue);
  return (
    <>
    <Heading 
        title={title}
        subtitle={`${location?.subregion}, ${location?.label}`}
    />
   
   {MediaSrc.length === 0 ? (
  <div className="w-full h-[60vh] overflow-hidden rounded-xl max-h-screen relative border">
    <Image
      src={imageSrc}
      fill
      className="object-cover w-full"
      alt="Image"
    />
    
    <div className="absolute top-5 right-5">
      <HeartButton 
        listingId={id}
        currentUser={currentUser}
      />
    </div>
  </div>
) : (
    <EmblaCarousel
    images={MediaSrc}
    options={OPTIONS}
    slides={SLIDES}
    id={id}
    currentUser={currentUser}
  />
)}

    </>
  )
}

export default ListingHead
