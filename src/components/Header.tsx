
import Link from "next/link";
import React from "react";

const Header = () => {
       const items = [
          { index: 1, label: "_hello", href: "/", active: false },
          { index: 2, label: "_about-me", href: "/About", active: false },
          { index: 3, label: "_projects", href: "/", active: false },
          { index: 4, label: "_contact-me", href: "/", active: false },
        ];
      
  return (
          <div className="border-b border-[#646d7d]/40  flex   items-center justify-between       ">
            <Link
              href="/"
              className="text-sm   hover:text-white border-b-2 border-transparent hover:border-b-amber-200  p-2 pr-24 pl-4 transition-colors "
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
                  className={`p-2  border-l-2 border-[#646d7d]/40 border-b-2 border-b-transparent hover:border-b-amber-200 hover:border-b-2 hover:border-l-opacity-5 pr-8  pl-8 transition-all ${
                    idx === items.length - 2 ? "border-r-2" : ""
                  }  
                  `}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

  )
}

export default Header
