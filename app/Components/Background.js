import React from "react";

function Background() {
  return (
    <>
      <div className="w-full h-screen  fixed">
        <div className="w-full text-center text-zinc-500 font-semibold absolute top-[5%] text-sm">
          Documents
        </div>
        <h1 className="text-zinc-700 text-8xl leading-none tracking-tighter font-semibold absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
