"use client";
import React from "react";

type Params = {
  tokenid: number;
};

type MetadataProps = {
  params: Params;
};

export default async function Metadata({ params }: MetadataProps) {
  const param = params;
  const res = await fetch(`https://api.blastinpepes.xyz/md/${param.tokenid}`);
  const data = await res.json();

//   const handleClick = () => {
//     console.log(data);
//   };

  return (
    <div className="pl-4 pt-4">
      <div>{JSON.stringify(data, null, 2)}</div>
      {/* <button onClick={handleClick} className="border-2 border-white">
        Console log
      </button> */}
    </div>
  );
}
