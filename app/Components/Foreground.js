"use client";
import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Issues with the icon, it might be affecting the visibility of the entire",
      filesize: "9.0 Mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: " It might Learn the skills you need for the job market and pay back once you've landed your dream job! affecting the visibility of the entire",
      filesize: "4.0 Mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "issues with the icon, it might be affecting the visibility of the entire",
      filesize: "9.0 Mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];
  return (
    <div ref={ref} className="w-full h-screen  fixed flex gap-10 flex-wrap p-5">
      {data.map((item, index) => {
        return <Card data={item} refrence={ref} />;
      })}
    </div>
  );
}

export default Foreground;
