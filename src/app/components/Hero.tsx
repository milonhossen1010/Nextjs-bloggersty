import Image from 'next/image';
import banner from '../images/banner.jpg';

import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <div className="w-full max-h-screen relative">
      <Image
        src={banner}
        alt="Banner Image"
        className=" w-full max-h-[90vh] object-cover"
      />
      <div className=" absolute top-0 w-full h-full bg-black/30 text-gray-100 flex flex-col items-center justify-center">
        <FadeIn>
          <h2 className="text-white text-center text-5xl lg:text-[150px] font-bold ">
            Milon Hossen
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="text-white text-xl text-center md:text-2xl lg:text-5xl font-semibold">
            Traveler, Photographer
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
