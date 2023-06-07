import React from 'react';
import Image from "next/image";
import VideoPlayer from '../../VideoPlayer';

type PropType = {
  index: number;
  images: string[];
};

const ImageByIndex: React.FC<PropType> = ({ index, images }) => {
  let mediaUrl = images[index % images.length];

  // Define the static URL for audio media type
  const staticAudioPosterUrl = "https://res.cloudinary.com/dpcywqppw/image/upload/v1685104457/website-creative_mukwal.jpg";

  // Check if the media is an audio
  if (mediaUrl.toLowerCase().endsWith('.mp3')) {
    // Use the static url for the audio poster
    return <VideoPlayer src={mediaUrl} poster={staticAudioPosterUrl} />;
  }

  // Check if the media is a video
  if (mediaUrl.includes('/video/')) {
    // Modify the url for the video poster
    const posterUrl = mediaUrl.replace('/upload/', '/upload/so_5/').replace(/\.[^/.]+$/, ".jpg");

    return <VideoPlayer src={mediaUrl} poster={posterUrl} />;
  }

  // Check if the media is an image
  if (mediaUrl.includes('/image/')) {
    return (
      <Image
        alt="Your alt text"
        src={mediaUrl}
        fill
        className="object-cover w-full block"
      />
    );
  }

  // If the media URL doesn't match either video, audio or image, render a fallback component or handle the case accordingly
  return <p>Unsupported media type</p>;
};

export default ImageByIndex;
