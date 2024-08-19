import React from 'react';
import Image from 'next/image';
export default function Nav() {
  return (
    <nav className="bg-dragon-ball-orange text-white p-4 shadow-md">
      <div className="container w-100 h-100 mx-auto flex justify-between items-center">
        <Image 
          src="https://web.dragonball-api.com/images-compress/android-icon-192x192.webp" 
          width={80}
          height={80}
          property=''
          alt='nav-Img'/>
        <h1 className="text-3xl font-bold flex items-center">
          <span className="mr-2 text-4xl">🪐</span>
          Dragon Ball App
        </h1>
        
      </div>
    </nav>
  );
}
