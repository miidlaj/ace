import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="mx-10 lg:mx-20 xl:40 2xl:mx-52  pb-10">
        <hr className="h-[0.1px] bg-primary/50 my-28" />
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-10 md:gap-0 items-center">
          <div className="flex flex-col justify-start w-full md:w-1/3">
            <p className="m-0 mb-3">Subscribe to newsletter</p>
            <div className="relative z-0 w-full">
              <input
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-primary/50 bg-transparent py-2.5 px-0 text-sm text-primary focus:border-primary/50 focus:outline-none focus:ring-0"
                placeholder=""
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-primary/50 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-focus:dark:text-primary">
                Your Email
              </label>

              <p className="absolute top-2 right-0">Subscribe</p>
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-start gap-1">
            <Link href={"/"} className="text-primary">
              About Us <span className="md:hidden"> | </span>
            </Link>
            <Link href={"/"} className="text-primary">
              Services <span className="md:hidden"> | </span>
            </Link>
            <Link href={"/"} className="text-primary">
              Work <span className="md:hidden"> | </span>
            </Link>
            <Link href={"/"} className="text-primary">
              Team <span className="md:hidden"> | </span>
            </Link>
            <Link href={"/"} className="text-primary">
              Blog
            </Link>
          </div>
          <div className="flex flex-col justify-start text-center md:text-left">
            <p className="m-0">Location</p>
            <p className="m-0 leading-7">
              No 4, Amman Nagar, Phase 3 ,<br /> Villankurichi, Coimbatore,
              Tamil <br /> Nadu India- 641035
            </p>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <a
              href="mailto:info@aceassured.com"
              className="text-primary underline cursor-pointer"
            >
              info@aceassured.com
            </a>
            <a
              href="tel:917356140099"
              className="text-primary underline cursor-pointer"
            >
              +91 7356140099
            </a>

            <div className="flex justify-between pt-10">
              <FaFacebookF size={18} color="primary" />
              <FaInstagram size={18} color="primary" />
              <FaXTwitter size={18} color="primary" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 text-center md:text-left justify-between mt-20">
          <div>Privacy Policy | Terms and Conditions</div>
          <div>Copyright @ 2023 AceAssured, All rights reserved.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
