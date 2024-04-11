import Image from 'next/image';
import { inter } from '@/app/ui/fonts';
import React from 'react';

export default function AcmeLogo() {
  return (
    <div
      className={`${inter.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <Image 
          src='/HE-red-logo.png'
          width={50} 
          height={50} 
          className='block md:hidden'
          alt='Screenshots of the dashboard project showing mobile version'
          />
      <p className="text-[18px] pl-3">No more waiting...</p>
    </div>
  );
}
