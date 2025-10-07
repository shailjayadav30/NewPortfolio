import Link from "next/link";
import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
const Footer = () => {
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
    <div className="border-t border-[#646d7d]/40  flex   items-center justify-between   ">
      <Link
        href="/"
        className="text-sm  p-[5px] hover:text-white border-b-2 border-b-transparent hover:border-b-amber-200  hover:border-b-2  pr-10 pl-[9.5px] transition-colors "
      >
        find me in:
      </Link>
      {footeritems.map((item, idx) => (
        <div
          key={idx}
          className={`text-sm hover:text-white transition-colors flex items-center  ${
            idx === footeritems.length - 1 ? "ml-auto" : ""
          } `}
        >
          <Link
            href={item.href}
            className={`p-2  border-l-2 border-[#646d7d]/40 border-b-2 border-b-transparent hover:border-b-amber-200 hover:border-b-2 hover:border-l-opacity-5 pr-8  pl-8 transition-all ${
              idx === footeritems.length - 2 ? "border-r-2" : ""
            }  
                  `}
          >
            {item.icon}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Footer;
