import React, { useState } from "react";
import allText from "@/assets/Footer/allText.png";
import Image from "next/image";

interface Props {
  urlPath?: string;
}

export default function Desktop({ urlPath }: Props) {
  return (
    <div className="px-4 md:px-10 h-[400px] z-50 bg-[#F5F5F5] hidden lg:flex flex-col items-center gap-20 justify-center w-full">
      <div className="flex w-4/5 justify-between">
        <a className="text-[30px] leading-[150%]">
          其餘詳情請私訊了解！或是洽:
        </a>
      </div>
      <div className="flex w-4/5 justify-between items-end">
        <a className="text-[15px] leading-[150%]">聯絡方式</a>
        <a className="text-[15px] leading-[150%]">
          Somer © All rights reserved.
        </a>
      </div>
    </div>
  );
}
