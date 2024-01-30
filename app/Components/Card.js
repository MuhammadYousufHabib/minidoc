"use client";
import React from "react";
import { FaFileArrowDown } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
function Card({ data, refrence }) {
  return (
    <motion.div
      drag
      dragConstraints={refrence}
      whileDrag={{ scale: 1.1 }}
      dragElastic={1.7}
      className="relative w-60 h-72 rounded-[40px] bg-zinc-900/50 text-white px-5 py-8 overflow-hidden"
    >
      <FaFileArrowDown />
      <p className="text-xs leading-tight  font-semibold mt-6">{data.desc}</p>
      <div className=" w-full h-36   absolute bottom-0 left-0 px-5 flex flex-col  ">
        <div className="flex items-center justify-between h-full ">
          <p className="text-sm">{data.filesize}</p>
          <span>{data.close ? <FaDownload /> : <MdClose />}</span>

          {data.tag.isOpen && (
            <div
              className={`text-white absolute bottom-0 font-semibold ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } w-[120%] -translate-x-[14%]  h-12 flex items-center justify-center`}
            >
              <h1>{data.tag.tagTitle}</h1>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
