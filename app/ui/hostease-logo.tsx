import Image from 'next/image';
import { inter } from '@/app/ui/fonts';
import React from 'react';

export default function HostEaseLogo() {
  return (
    <div
      className={`${inter.className} flex flex-row items-center leading-none text-black`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <Image 
          src='/HE-red-logo.png'
          width={50} 
          height={50} 
          className='block'
          alt='Screenshots of the dashboard project showing mobile version'
          />
      <p className="text-[18px] pl-2 md:hidden">No more waiting...</p>
    </div>
  );
}

