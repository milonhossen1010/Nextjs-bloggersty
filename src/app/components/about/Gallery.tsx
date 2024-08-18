import Container from '../Container';
import Heading from '../Heading';
import Image from 'next/image';
import img1 from '@/app/images/gallery1.jpg';
import img2 from '@/app/images/gallery1.jpg';
import img3 from '@/app/images/gallery1.jpg';
import img4 from '@/app/images/gallery1.jpg';
import img5 from '@/app/images/gallery1.jpg';
import img6 from '@/app/images/gallery1.jpg';

export default function Gallery() {
  const gallaries = [
    { id: 1, link: img1, alt: 'Image' },
    { id: 1, link: img2, alt: 'Image' },
    { id: 1, link: img3, alt: 'Image' },
    { id: 1, link: img4, alt: 'Image' },
    { id: 1, link: img5, alt: 'Image' },
    { id: 1, link: img6, alt: 'Image' },
    { id: 1, link: img6, alt: 'Image' },
    { id: 1, link: img6, alt: 'Image' },
  ];
  return (
    <div className="py-12 md:py-20">
      <Container>
        <Heading title="Gallery" className="text-center" />
        <div className="grid sm:grid-cols-2 gap-5 md:grid-cols-4 items-center justify-between mt-10">
          {gallaries.map(item => (
            <Image
              key={item.id}
              src={item.link}
              width={300}
              height={250}
              alt={item.alt}
              className="hover:opacity-60 w-full"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
