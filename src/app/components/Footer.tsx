import Link from 'next/link';
import Container from './Container';
import Logo from './Logo';
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';

export default function Footer() {
   
  return (
    <div className="bg-black">
      <Container className="p-10  text-gray-100 flex items-center justify-between">
        <Logo title="Bloggers" className="text-white" />
        <div className="text-gray-300 hidden md:inline-flex items-center gap-7">
          <Link href={'#'}>
            <BsYoutube className="text-2xl hover:text-red-500 duration-200" />
          </Link>
          <Link href={'#'}>
            <BsFacebook className="text-2xl hover:text-red-500 duration-200" />
          </Link>
          <Link href={'#'}>
            <BsTwitter className="text-2xl hover:text-red-500 duration-200" />
          </Link>
          <Link href={'#'}>
            <BsLinkedin className="text-2xl hover:text-red-500 duration-200" />
          </Link>
        </div>

        <p className="text-sm text-gray-300">
          © All rights reverved{' '}
          <Link
            href={'https://milonpc.com'}
            className="hover:text-white font-semibold duration-200"
          >
            MilonPC
          </Link>
        </p>
      </Container>
    </div>
  );
}
