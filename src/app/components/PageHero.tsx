import Link from 'next/link';
import Container from './Container';

export default function PageHero({ title = 'Title' }) {
  return (
    <div className="py-24 bg-greenLight">
      <Container>
        <h1 className="text-3xl md:text-5xl uppercase font-bold text-center text-white">
          {title}
        </h1>
        <p className="text-center mt-2 text-bodyColor">
          <Link href="/">Home </Link>/ {title}
        </p>
      </Container>
    </div>
  );
}
