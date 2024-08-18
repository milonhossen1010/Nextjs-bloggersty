import Container from '@/app/components/Container';
import Heading from '@/app/components/Heading';
import milon from '@/app/images/milon1.png';
import Image from 'next/image';
import Button from '@/app/components/Button';
export default function info() {
  return (
    <div className="py-12 md:py-20">
      <Container>
        <div className="grid md:grid-cols-[repeat(2,1fr)] items-center justify-between gap-8 md:gap-20">
          <div className="text-center md:text-left">
            <p className=" italic mb-2 text-gray text-md">
              Lorem ipsum dolor sit amet
            </p>
            <Heading title="Milon Hossen " />
            <p className="mt-5 mb-7 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exerc itation ullamco laboris
              nisi. Ut aliquip ex ea commodo consequat.
            </p>
            <Button />
          </div>
          <Image
            className=" rounded-br-[180px]"
            src={milon}
            alt="Milon"
            height={500}
            width={500}
          />
        </div>
      </Container>
    </div>
  );
}
