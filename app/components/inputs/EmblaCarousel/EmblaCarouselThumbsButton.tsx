import React from 'react';
import Image from 'next/image';

type PropType = {
  selected: boolean;
  imgSrc: string;
  index: number;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, imgSrc, index, onClick } = props;

  let thumbnailSrc = imgSrc;
  // Define the static URL for audio media type
  const staticAudioPosterUrl = "https://res.cloudinary.com/dpcywqppw/image/upload/v1685104457/website-creative_mukwal.jpg";

  // Check if the media is an audio
  if (imgSrc.toLowerCase().endsWith('.mp3')) {
    // Use the static url for the audio poster
    thumbnailSrc = staticAudioPosterUrl;
  }

  // Check if the media is a video
  else if (imgSrc.includes('/video/')) {
    // Modify the url for the video poster
    thumbnailSrc = imgSrc.replace('/upload/', '/upload/so_5/').replace(/\.[^/.]+$/, ".jpg");
  }

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : '',
      )}
    >
      <button
        onClick={onClick}
        className="embla-thumbs__slide__button"
        type="button"
      >
        <Image 
          className="embla-thumbs__slide__img"
          src={thumbnailSrc}
          alt="Your alt text"
          width={200}
          height={200}
        />
      </button>
    </div>
  )
}
