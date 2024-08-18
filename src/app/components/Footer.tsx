import Link from 'next/link';
import Container from './Container';
import Logo from './Logo';
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';

export default function Footer() {
   
  return (
    <div className="bg-black">
      <Container className="p-10  text-gray-100 flex items-center justify-between">
        <Logo title="Bloggers" className="text-white" />
        <div className="text-gray-300 hidden md:inline-flex items-center gap-7">
          <Link href={'https://www.facebook.com/milonhossen.live/'}>
            <BsFacebook className="text-2xl hover:text-red-500 duration-200" />
          </Link>
          <Link href={'https://x.com/milonhossen1010'}>
            <BsTwitter className="text-2xl hover:text-red-500 duration-200" />
          </Link>
          <Link href={'https://www.linkedin.com/in/milonhossen1010/'}>
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
