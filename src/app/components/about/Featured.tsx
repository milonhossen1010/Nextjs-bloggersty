import Container from "../Container";
import Heading from "../Heading";
import img1 from "@/app/images/clients/h1-clients-img-01.png"
import img2 from "@/app/images/clients/h1-clients-img-02.png"
import img3 from "@/app/images/clients/h1-clients-img-03.png"
import img4 from "@/app/images/clients/h1-clients-img-04.png"
import img5 from "@/app/images/clients/h1-clients-img-05.png"
import Image from "next/image";

export default function Featured() {
    const clients = [
        {id:1, link: img1, alt:"Image"},
        {id:1, link: img2, alt:"Image"},
        {id:1, link: img3, alt:"Image"},
        {id:1, link: img4, alt:"Image"},
        {id:1, link: img5, alt:"Image"},
    ]
  return (
    <div className="py-12 md:py-20 ">
      <Container>
        <Heading title="Featured in" className="text-center" />
          <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-between mt-10">
              {
                  clients.map((item)=> <Image key={item.id} src={item.link} width={300} height={250} alt={item.alt} className="hover:opacity-60 w-40" /> )
              }

          </div>
      </Container>
    </div>
  );
}