import Image from 'next/image';
import { FC } from 'react';

const ButtonGroup: FC = () => {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
    
      <div className="flex flex-col items-center">
      <button className="bg-supernova-400 p-1">
        <Image src="/assets/image-1.png" alt="Image 1" width={55} height={55} />
      </button>
        <p className='text-white text-sm'>FCR</p>
      </div>

      <div className="flex flex-col items-center">
      <button className="bg-supernova-400 p-1">
        <Image src="/assets/image-2.png" alt="Image 2" width={55} height={55} />
      </button>
        <p className='text-white text-sm'>Referral</p>
      </div>

      <div className="flex flex-col items-center">
      <button className="bg-supernova-400 p-1">
        <Image src="/assets/image-3.png" alt="Image 3" width={55} height={55} />
      </button>
        <p className='text-white text-sm'>History</p>
      </div>

      <div className="flex flex-col items-center">
      <button className="bg-supernova-400 p-1">
        <Image src="/assets/image-4.png" alt="Image 4" width={55} height={55} />
      </button>
        <p className='text-white text-sm'>Games</p>
      </div>

      <div className="flex flex-col items-center">
      <button className="bg-supernova-400 p-1">
        <Image src="/assets/image-5.png" alt="Image 5" width={55} height={55} />
      </button>
        <p className='text-white text-sm'>FAQs</p>
      </div>
    </div>
  );
};

export default ButtonGroup;
