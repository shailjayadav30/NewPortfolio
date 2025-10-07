import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex  items-center justify-center gap-[20rem] w-full h-full   ">
      {/* left diiv */}
      <div className="leading-relaxed">
        <p className="text-gray-600 text-sm pb-1">Hi all. I am</p>
        <h1 className="text-white text-6xl pb-2">Shailja Yadav</h1>
        <p className=" text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-400 pb-14">
          {" "}
          A Fullstack Developer
        </p>
        <p className=" text-gray-400">&#47;&#47; find my profile on github </p>
        <p>
          <span className="text-indigo-500">const</span>{" "}
          <span className="text-teal-400">githubLink</span> ={" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-300"
            href="https://github.com/shailjayadav30"
          >
            &quot;https://github.com/shailjayadav30&quot;
          </Link>
        </p>
      </div>
      {/* right div */}
      <div></div>
    </div>
  );
}

//  {/* hero section*/}
