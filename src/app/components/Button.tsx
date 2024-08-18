import Link from 'next/link';
import { BiLeftArrow, BiRightArrowAlt } from 'react-icons/bi';

export default function Button({ href = '#', title = 'Learn More' }) {
  return (
    <div className="mt-3">
      <Link
        href={href}
        className=" font-oswald font-bold text-[16px] uppercase inline-flex items-center gap-1 text-bodyColor bg-gradient-to-r bg-greenLight hover:bg-darkGreen  text-center px-6 py-4 me-2 mb-2"
      >
        <BiRightArrowAlt />
        {title}
      </Link>
    </div>
  );
}
