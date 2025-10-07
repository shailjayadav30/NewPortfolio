import Link from "next/link";
import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
const First = () => {
  const items = [
    { index: 1, label: "_hello", href: "/", active: false },
    { index: 2, label: "_about-me", href: "/About", active: false },
    { index: 3, label: "_projects", href: "/", active: false },
    { index: 4, label: "_contact-me", href: "/", active: false },
  ];

  const footeritems = [
    {
      index: 1,
      icon: <FaSquareXTwitter />,
      href: "https://x.com/Shailja5911",
    },
    {
      index: 2,
      icon: <TiSocialLinkedin />,
      href: "https://www.linkedin.com/in/shailja-yadav-643853252",
    },
  ];
  return (
    <div className="text-blue-100 bg-[#0e172a] h-[90vh] w-[95vw] border-[#646d7d]/40  border rounded-lg">
      {/* navbar */}
      <div className="border-b border-[#646d7d]/40  flex   items-center justify-between       ">
        <Link
          href="/"
          className="text-sm   hover:text-white hover:border-b-amber-200 hover:border-b-2 p-2 pr-24 pl-4 "
        >
          shailja-yadav
        </Link>
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`text-sm hover:text-white transition-colors flex items-center  ${
              idx === items.length - 1 ? "ml-auto" : ""
            } `}
          >
            <Link
              href={item.href}
              className={`p-2  border-l-2 border-[#646d7d]/40  hover:border-b-amber-200 hover:border-b-2 hover:border-l-opacity-5 pr-8  pl-8 ${
                idx === items.length - 2 ? "border-r-2" : ""
              }  
              `}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>

      {/* hero section*/}

      <div className="flex  items-center justify-center gap-[20rem] h-[80vh]">
        {/* left diiv */}
        <div className="leading-relaxed">
          <p className="text-gray-600 text-sm pb-1">Hi all. I am</p>
          <h1 className="text-white text-6xl pb-2">Shailja Yadav</h1>
          <p className=" text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-400 pb-14">
            {" "}
            A Fullstack Developer
          </p>
          <p className=" text-gray-400">
            &#47;&#47; find my profile on github{" "}
          </p>
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

      {/* footer */}

      <div className="border-t border-[#646d7d]/40  flex   items-center h-[32px]">
        <Link
          href="/"
          className="text-sm   hover:text-white    hover:border-b-amber-200 hover:border-b-2 px-4"
        >
          find me in:
        </Link>
        {footeritems.map((item, idx) => (
          <div
            key={idx}
            className={`text-sm h-full hover:text-white  flex items-center ${
              idx === footeritems.length - 1 ? "ml-auto" : ""
            } } `}
          >
            <Link
              href={item.href}
              className={`flex items-center px-4  border-l-2 border-[#646d7d]/40  hover:border-b-amber-200 hover:border-b-2 hover:border-l-opacity-5 h-full ${
                idx === footeritems.length - 2 ? "border-r-2" : ""
              }
              `}
            >
              {item.icon}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default First;
