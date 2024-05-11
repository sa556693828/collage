import React, { useContext } from "react";
import { FaGlobe } from "react-icons/fa";
import Link from "next/link";

interface Props {
  urlPath: string;
}

export default function Header() {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <FaGlobe className="size-8" />
        <span className="sr-only">Global Student Assist</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Services
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Testimonials
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
