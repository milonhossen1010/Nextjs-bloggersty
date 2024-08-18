"use client"
import Link from "next/link";
import Logo from "./Logo";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";
import { motion, useScroll } from 'framer-motion';
import Container from "./Container";


export default function Navbar() {
  const navigation = [
    {id:1, title: "Home", href: "/" },
    {id:3, title: "About", href: "/about" },
    {id:2, title: "Blog", href: "/blogs" },
    {id:4, title: "Studio", href: "/studio" },
  ];

  const [active, setActive] = useState("");
  const pathName = usePathname();
  useEffect(() => {
    setActive(pathName);
  }, [pathName]);

  const [showMenu, setShowMenu] = useState(false);

 

  return (
    <div className="w-full bg-white/70 py-7 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <Container>
        <div className="flex items-center justify-between px-4 lg:px-0 h-full">
          <Logo title="Bloggers" className="text-black" />

          <div className="hidden md:inline-flex items-center gap-7 text-gray-900 hover:text-primeColor duration-200">
            {navigation.map(item => (
              <Link
                key={item.id}
                href={item.href}
                className={`${active === item.href && 'text-primeColor'} text-sm uppercase font-semibold relative group overflow-hidden`}
              >
                {item?.title}
                <span
                  className={`${active === item.href && 'translate-x-0'} w-full h-[1px] bg-primeColor absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200 `}
                />
              </Link>
            ))}
          </div>
          {showMenu && (
            <div className="w-full h-screen fixed lg:hidden top-0 left-0 bg-darkGreen bg-opacity-90 z-50">
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-[70%] h-full bg-darkGreen p-4 relative flex flex-col gap-4"
              >
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute right-2 top-8 text-3xl text-red-400 hover:text-red-600 cursor-pointer duration-300"
                >
                  <IoCloseSharp />
                </span>
                <Link href={'/'} onClick={() => setShowMenu(false)}>
                  <p className="text-2xl font-bold text-white uppercase">
                    Blogger
                  </p>
                </Link>
                <ul className="flex flex-col text-gray-300 gap-3 uppercase text-sm font-semibold ">
                  {navigation.map(item => (
                    <Link key={item.id} href={item.href}>
                      <li
                        onClick={() => setShowMenu(false)}
                        className="hover:text-white cursor-pointer duration-300"
                        key={item.id}
                      >
                        {item.title}
                      </li>
                    </Link>
                  ))}
                </ul>
              </motion.div>
            </div>
          )}
          <div
            onClick={() => setShowMenu(true)}
            className="flex flex-col justify-between lg:hidden w-7 h-5 overflow-hidden group cursor-pointer"
          >
            <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor -translate-x-1 group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor -translate-x-[40%] group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor"></span>
          </div>
        </div>
      </Container>
    </div>
  );
  
}