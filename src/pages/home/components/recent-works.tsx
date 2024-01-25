import Image from "next/image";
import React from "react";

const RecentWorks = () => {
  return (
    <>
      <div className="mx-52 flex flex-col gap-20 py-32">
        <div className="text-center">
          <h1 className="text-[90px]">Recent Works</h1>
          <p className="text-[18px] font-poppins">
            Explore our portfolio, a quick glimpse into our most recent works in
            web and digital marketing solutions.
          </p>
        </div>

        <div className="font-poppins flex flex-col gap-16">
          <div className="flex justify-between">
            <div className="flex flex-col gap-7">
              <Image
                src={"/Ishwarayan.png"}
                alt="Ishwarayan"
                height={547}
                width={465}
              />

              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <p className="underline text-[18px]">Ishwarayan</p>
                  <p className="text-[14px]">Animation</p>
                </div>

                <button className="flex font-new-york-large gap-2 items-center outline outline-white outline-2 bg-transparent text-white py-2 px-4 rounded-full">
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
                width={465}
              />

              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <p className="underline text-[18px]">Tara Fabrics</p>
                  <p className="text-[14px]">Product Design</p>
                </div>

                <button className="flex font-new-york-large gap-2 items-center outline outline-white outline-2 bg-transparent text-white py-2 px-4 rounded-full">
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

          <div className="flex justify-between">
            <div className="flex flex-col gap-7">
              <Image
                src={"/hackit-mockup.png"}
                alt="Jayson & jonson"
                height={681}
                width={1110}
              />

              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <p className="underline text-[18px]">Hackit</p>
                  <p className="text-[14px]">Product Design</p>
                </div>

                <button className="flex font-new-york-large gap-2 items-center outline outline-white outline-2 bg-transparent text-white py-2 px-4 rounded-full">
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

          <div className="flex justify-between">
            <div className="flex flex-col gap-7">
              <Image
                src={"/jayson&jonson.png"}
                alt="Jayson & jonson"
                height={547}
                width={465}
              />

              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <p className="underline text-[18px]">Jayson&jonson</p>
                  <p className="text-[14px]">User experience</p>
                </div>

                <button className="flex font-new-york-large gap-2 items-center outline outline-white outline-2 bg-transparent text-white py-2 px-4 rounded-full">
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
              />

              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <p className="underline text-[18px]">The Prid</p>
                  <p className="text-[14px]">Art Direction</p>
                </div>

                <button className="flex font-new-york-large gap-2 items-center outline outline-white outline-2 bg-transparent text-white py-2 px-4 rounded-full">
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
