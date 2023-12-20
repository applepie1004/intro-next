"use client";
import Image from "next/image";
import { useState } from "react";

export function Control() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        type="button"
        className="my-5 px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100 hover:bg-sky-600"
        onClick={(e) => {
          visible == false ? setVisible(true) : setVisible(false);
        }}
      >
        구조보기
      </button>
      {visible ? (
        <>
          <Image
            src={"/img/tada.gif"}
            width={200}
            height={200}
            alt="tada"
          ></Image>
          <Image
            src={"/img/screenshot.png"}
            width={200}
            height={800}
            alt="screenshot"
          ></Image>
        </>
      ) : null}
    </div>
  );
}
