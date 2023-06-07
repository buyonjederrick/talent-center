'use client';

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from 'react-icons/tb';

declare global {
    var cloudinary: any
  }

const uploadPreset = "next-js-hire-esom-talent";

interface MediaUploadProps {
    onChange: (value: string[]) => void;
    value: string[];
  }
  

const MultipleMediaUpload: React.FC<MediaUploadProps> = ({
    onChange,
    value
}) => {
      const handleUpload = useCallback((result: any) => {
      onChange([...value, result.info.secure_url]);
    }, [onChange, value]);
      
  return (
    <CldUploadWidget 
      onUpload={handleUpload} 
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 5
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed 
              border-2 
              p-20 
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-600
            "
          >
            <TbPhotoPlus
              size={50}
            />
            <div className="font-semibold text-lg">
              Click to upload
            </div>
            {value.length > 0 && (
  <div className="absolute inset-0 w-full h-full flex flex-row flex-wrap gap-2">
    {value.map((item, index) => (
      <Image
      key={index}
      src={item}
      style={{ objectFit: 'cover' }} 
      alt="House"
      width={250} // Set the desired width value
      height={250} // 
      />
    ))}
  </div>
)}
          </div>
        ) 
    }}
    </CldUploadWidget>
  )
}

export default MultipleMediaUpload













