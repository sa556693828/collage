import React, { useContext } from "react";
import Desktop from "./FooterDesktop";
import Mobile from "./FooterMobile";

export default function Footer() {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <footer className="text-black flex w-full py-2">
      <Desktop />
      {/* <Mobile /> */}
    </footer>
  );
}
