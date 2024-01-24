import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mx-52  pb-10">
        <hr className="h-[0.1px] bg-white/50 my-28" />
        <div className="flex justify-between items-start">
          <div className="flex flex-col justify-start w-1/3">
            <p className="m-0 mb-3">Subscribe to newsletter</p>
            <div className="relative z-0 w-full">
              <input
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-white/50 bg-transparent py-2.5 px-0 text-sm text-white focus:border-white/50 focus:outline-none focus:ring-0"
                placeholder=""
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-white/50 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white">
                Your Email
              </label>

              <p className="absolute -top-2 right-0">Subscribe</p>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-1">
            <Link href={"/"} className="text-white">
              About Us
            </Link>
            <Link href={"/"} className="text-white">
              Services
            </Link>
            <Link href={"/"} className="text-white">
              Work
            </Link>
            <Link href={"/"} className="text-white">
              Team
            </Link>
            <Link href={"/"} className="text-white">
              Blog
            </Link>
          </div>
          <div className="flex flex-col justify-start">
            <p className="m-0">Location</p>
            <p className="m-0 leading-7">
              No 4, Amman Nagar, Phase 3 ,<br /> Villankurichi, Coimbatore,
              Tamil <br /> Nadu India- 641035
            </p>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <a
              href="mailto:info@aceassured.com"
              className="text-white underline cursor-pointer"
            >
              info@aceassured.com
            </a>
            <a
              href="tel:917356140099"
              className="text-white underline cursor-pointer"
            >
              +91 7356140099
            </a>

            <div></div>
          </div>
        </div>

        <div className="flex justify-between mt-20">
          <div>Privacy Policy | Terms and Conditions</div>
          <div>Copyright @ 2023 AceAssured, All rights reserved.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
