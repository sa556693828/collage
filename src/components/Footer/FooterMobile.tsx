import React from "react";
import Image from "next/image";

interface Props {
  urlPath?: string;
}

export default function Mobile({ urlPath }: Props) {
  return (
    <div className="flex w-full justify-center lg:hidden">
      <a className="text-xs">Gm9453 © All rights reserved.</a>
    </div>
  );
}
