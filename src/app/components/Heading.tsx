import { Oswald } from 'next/font/google';
import FadeIn from './FadeIn';
const oswald = Oswald({ weight: ['400', '700'], subsets: ['latin'] });
export default function Heading({ title = 'Title', className='' }) {
  return (
    <FadeIn>
      <h2
        className={`text-2xl lg:text-[42px] font-bold uppercase mb-4 font-oswald ${className}`}
      >
        {title}
      </h2>
    </FadeIn>
  );
}
