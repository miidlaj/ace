import Image from "next/image";
import React from "react";

const RecentWorks = () => {
  return (
    <>
      <div className="md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-52 flex flex-col items-center gap-20 py-32">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[100px] ">
            Recent Works
          </h1>
          <p className="text-base md:text-lg font-poppins">
            Explore our portfolio, a quick glimpse into our most recent works in
            web and digital marketing solutions.
          </p>
        </div>

        <div className="font-poppins flex flex-col gap-16">
          <div className="flex lg:flex-row md:gap-5 gap-10 flex-col justify-between">
            <div className="flex flex-col gap-7">
              <Image
                src={"/Ishwarayan.png"}
                alt="Ishwarayan"
                height={547}
                className="hidden md:flex"
                width={465}
              />

              <Image
                src={"/Ishwarayan.png"}
                alt="Ishwarayan"
                height={421}
                width={365}
                className="md:hidden"
              />

              <div className="flex justify-between w-auto">
                <div className="flex flex-col gap-2">
                  <p className="underline text-[18px]">Ishwarayan</p>
                  <p className="text-[14px]">Animation</p>
                </div>

                <button className="flex font-new-york-large gap-2 items-center border-none outline outline-primary outline-2 bg-transparent text-primary py-2 px-4 rounded-full">
                  <span className="capitalize text-[18px]">Case Study</span>
                  <Image
                    className=""
                    height={13}
                    width={13}
                    alt=""
                    src="/group-60173.svg"
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <Image
                src={"/tara-mockup.png"}
                alt="Ishwarayan"
                height={404}
                className="hidden md:flex"
                width={465}
              />

              <Image
                src={"/tara-mockup.png"}
                alt="Ishwarayan"
                height={317}
                width={365}
                className="md:hidden"
              />

              <div className="flex justify-between w-auto">
                <div className="flex flex-col gap-2">
                  <p className="underline text-[18px]">Tara Fabrics</p>
                  <p className="text-[14px]">Product Design</p>
                </div>

                <button className="flex font-new-york-large gap-2 items-center outline border-none outline-primary outline-2 bg-transparent text-primary py-2 px-4 rounded-full">
                  <span className="capitalize text-[18px]">Case Study</span>
                  <Image
                    className=""
                    height={13}
                    width={13}
                    alt=""
                    src="/group-60173.svg"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row md:gap-5 gap-10 flex-col justify-between">
            <div className="flex flex-col gap-7">
              <Image
                src={"/hackit-mockup.png"}
                alt="Jayson & jonson"
                height={681}
                width={1110}
                className="hidden xl:flex"
              />

              <Image
                src={"/hackit-mockup.png"}
                alt="Jayson & jonson"
                height={429}
                width={700}
                className="hidden md:flex xl:hidden"
              />

              <Image
                src={"/hackit-mockup.png"}
                alt="Jayson & jonson"
                height={223}
                width={365}
                className="md:hidden"
              />

              <div className="flex justify-between w-auto">
                <div className="flex flex-col gap-2">
                  <p className="underline text-[18px]">Hackit</p>
                  <p className="text-[14px]">Product Design</p>
                </div>

                <button className="flex font-new-york-large gap-2 items-center outline border-none outline-primary outline-2 bg-transparent text-primary py-2 px-4 rounded-full">
                  <span className="capitalize text-[18px]">Case Study</span>
                  <Image
                    className=""
                    height={13}
                    width={13}
                    alt=""
                    src="/group-60173.svg"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row md:gap-5 gap-10 flex-col justify-between">
            <div className="flex flex-col gap-7">
              <Image
                src={"/jayson&jonson.png"}
                alt="Jayson & jonson"
                height={547}
                width={465}
                className="hidden md:flex"
              />
              <Image
                src={"/jayson&jonson.png"}
                alt="Jayson & jonson"
                height={436}
                className="md:hidden"
                width={365}
              />

              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <p className="underline text-[18px]">Jayson&jonson</p>
                  <p className="text-[14px]">User experience</p>
                </div>

                <button className="flex font-new-york-large gap-2 items-center border-none outline outline-primary outline-2 bg-transparent text-primary py-2 px-4 rounded-full">
                  <span className="capitalize text-[18px]">Case Study</span>
                  <Image
                    className=""
                    height={13}
                    width={13}
                    alt=""
                    src="/group-60173.svg"
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <Image
                src={"/prid.png"}
                alt="The Prid"
                height={404}
                width={465}
                className="hidden md:flex"
              />

              <Image
                src={"/prid.png"}
                alt="The Prid"
                height={317}
                width={365}
                className="md:hidden"
              />

              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <p className="underline text-[18px]">The Prid</p>
                  <p className="text-[14px]">Art Direction</p>
                </div>

                <button className="flex font-new-york-large gap-2 items-center border-none outline outline-primary outline-2 bg-transparent text-primary py-2 px-4 rounded-full">
                  <span className="capitalize text-[18px]">Case Study</span>
                  <Image
                    className=""
                    height={13}
                    width={13}
                    alt=""
                    src="/group-60173.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentWorks;
