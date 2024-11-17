import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="text-supernova-400 text-2xl p-4 flex justify-between items-center">
      <h1>FCR</h1>
      <Image src="/assets/community.png" width={30} height={30} alt="coin" />
    </header>
  );
};

export default Header;
