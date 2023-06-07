import { useState, useRef, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if(isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [isPlaying]);

  return (
    <div className="relative bg-black bg-opacity-50">
      {!isPlaying && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white border-white rounded-full box-content opacity-60 focus:outline-none cursor-pointer z-10 flex items-center justify-center border-2 shadow-2xl bg-opacity-60"
            onClick={handlePlay}
          >
            <FaPlay className="text-gray-700 w-8 h-8" />
          </button>
        </div>
      )}
      <audio
        ref={audioRef}
        className="w-full"
        src={src}
        controls={isPlaying}
      />
    </div>
  );
};

export default AudioPlayer;
