'use client';
import { useState } from 'react';

interface ProfileCardProps {
  name: string;
  role: string;
  company: string;
  imageUrl?: string;
  logoUrl?: string;
}

export default function ProfileCard({
  name,
  role,
  company,
  imageUrl = 'https://via.placeholder.com/68',
  logoUrl = 'https://via.placeholder.com/68',
}: ProfileCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex justify-center perspective-1000">
      <div
        className="relative w-[356px] h-[204px] cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        onClick={handleFlip}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 ease-in-out`}
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front Side */}
          <div
            className="absolute w-full h-full backface-hidden rounded-lg border bg-gradient-to-br from-violet-400 to-black shadow-md flex items-center py-8 px-4 border-gray-200 hover:shadow-xl transition-shadow duration-300"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="text-center w-full">
              <p className="text-xl font-extrabold leading-tight text-white md:text-3xl">{name}</p>
              <p className="text-sm font-medium text-gray-500 mt-1 md:text-base">{role}</p>
              <p className="text-xs text-gray-400 mt-1">{company}</p>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full h-full backface-hidden rounded-lg border bg-white shadow-md flex items-center justify-center py-8 px-4 border-gray-200"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="text-center">
              <img
                src={logoUrl}
                alt="Logo"
                className="mx-auto mb-4 max-w-[150px] max-h-[100px] object-contain"
              />
              <p className="text-white text-sm font-medium">Click to flip back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex justify-center">
    //   <div className="rounded-lg border bg-white shadow-md mb-5 flex items-center h-[204px] w-[356px] py-8 px-4 border-gray-200 hover:shadow-xl transition-shadow duration-300">
    //     {/* Avatar */}
    //     {/* <span className="relative flex h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full">
    //     <img className="aspect-square h-full w-full object-cover" src={imageUrl} alt={name} />
    //   </span> */}

    //     {/* Text Content */}
    //     <div className="text-center w-full">
    //       <p className="text-xl font-extrabold leading-tight text-gray-900 md:text-3xl">{name}</p>
    //       <p className="text-sm font-medium text-gray-500 mt-1 md:text-base">{role}</p>
    //       <p className="text-xs text-gray-400 mt-1">{company}</p>
    //     </div>
    //   </div>
    // </div>
  );
}
