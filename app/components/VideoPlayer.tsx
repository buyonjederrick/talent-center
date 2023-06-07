import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

interface VideoPlayerProps {
  src: string;
  poster: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if(videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleEnd = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    if(isPlaying && videoRef.current) {
      videoRef.current.play();
    }
  }, [isPlaying]);

  return (
    <div className="relative bg-black bg-opacity-50">
      {!isPlaying && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
          <Image src={poster} fill alt="poster" className="w-full h-full object-cover"/>
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white border-white rounded-full box-content opacity-60 focus:outline-none cursor-pointer z-10 flex items-center justify-center border-2 shadow-2xl bg-opacity-60"
            onClick={handlePlay}
          >
            <FaPlay className="text-gray-700 w-8 h-8" />
          </button>
        </div>
      )}
      <video
        ref={videoRef}
        poster={poster}
        className="h-[20vh] sm:h-[60vh] w-full object-cover"
        src={src}
        controls={isPlaying}
        onEnded={handleEnd}
      />
    </div>
  );
};

export default VideoPlayer;
