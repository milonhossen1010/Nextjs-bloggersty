import PageHero from '@/app/components/PageHero';
import Featured from '@/app/components/about/Featured';
import Info from '@/app/components/about/Info';
import Gallery from "@/app/components/about/Gallery";
export default function About() {
  return (
    <>
      <PageHero title="About Us" />
      <Info />
      <Featured/>
        <Gallery/>
     
    </>
  );
}
