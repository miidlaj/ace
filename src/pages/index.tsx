/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import Stairs from "../components/stair_animation/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Stairs backgroundColor={'#fff'}>hi
        {/* <div className="w-full relative bg-black h-[6999px] overflow-hidden text-left text-81xl text-white font-new-york">
      <div className="absolute top-[2584px] left-[calc(50%_-_629px)] w-[1258.4px] h-[2777px] text-41xl">
        <div className="absolute top-[0px] left-[calc(50%_-_368.8px)] w-[737.3px] h-[175px]">
          <div className="absolute top-[0px] left-[calc(50%_-_368.65px)] w-[737.3px] h-[175px]">
            <div className="absolute top-[0px] left-[calc(50%_-_187.05px)] leading-[100px] font-medium">
              Recent Works
            </div>
            <div className="absolute top-[107px] left-[calc(50%_-_368.65px)] text-xl leading-[170%] font-poppins text-center flex items-center justify-center w-[737.3px]">
              Explore our portfolio, a quick glimpse into our most recent works
              in web and digital marketing solutions.
            </div>
          </div>
        </div>
        <div className="absolute top-[215px] left-[0px] w-[1258.4px] h-[2562px] text-xl">
          <div className="absolute top-[1807px] left-[0px] w-[564.5px] h-[755px]">
            <div className="absolute top-[701px] left-[402.5px] rounded-43xl flex flex-col items-start justify-start py-3 px-[18px] border-[1px] border-solid border-white">
              <div className="w-[125.9px] relative h-[30px]">
                <div className="absolute top-[0px] left-[0px] w-[125.9px] h-[30px]">
                  <div className="absolute top-[0px] left-[0px] leading-[150%] capitalize">
                    Case Study
                  </div>
                  <img
                    className="absolute h-[42%] w-[10.25%] top-[29%] right-[0%] bottom-[29%] left-[89.75%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-60173.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute w-full top-[calc(50%_-_377.5px)] right-[0px] left-[0px] h-[755px] font-inter">
              <img
                className="absolute w-full top-[calc(50%_-_377.5px)] right-[0px] left-[0px] max-w-full overflow-hidden h-[665px] object-cover"
                alt=""
                src="/figure--picture--works4png@2x.png"
              />
              <div className="absolute top-[694px] left-[0px] leading-[30px] font-medium">{`Jayson&jonson`}</div>
              <div className="absolute w-[25.69%] right-[74.31%] bottom-[30px] left-[0%] bg-white h-0.5" />
              <div className="absolute top-[735px] left-[0px] text-base leading-[16px] flex items-center w-32 h-5">
                User experience
              </div>
            </div>
          </div>
          <div className="absolute top-[1807px] left-[692.5px] w-[564.9px] h-[582px]">
            <div className="absolute top-[528px] left-[403px] rounded-43xl flex flex-col items-start justify-start py-3 px-[18px] border-[1px] border-solid border-white">
              <div className="w-[125.9px] relative h-[30px]">
                <div className="absolute top-[0px] left-[0px] w-[125.9px] h-[30px]">
                  <div className="absolute top-[0px] left-[0px] leading-[150%] capitalize">
                    Case Study
                  </div>
                  <img
                    className="absolute h-[42%] w-[10.25%] top-[29%] right-[0%] bottom-[29%] left-[89.75%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-60173.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_0.4px)] top-[calc(50%_-_291px)] right-[0.4px] left-[0px] h-[581.6px]">
              <img
                className="absolute w-full top-[calc(50%_-_290.8px)] right-[0px] left-[0px] max-w-full overflow-hidden h-[491.6px] object-cover"
                alt=""
                src="/figure--picture--works5png@2x.png"
              />
              <div className="absolute top-[520.6px] left-[0px] leading-[30px] font-medium">
                The Prid
              </div>
              <div className="absolute w-[14.35%] right-[85.56%] bottom-[29.6px] left-[0.09%] bg-white h-0.5" />
              <div className="absolute top-[561.6px] left-[0px] text-base leading-[16px] font-inter flex items-center w-[96.7px] h-5">
                Art Direction
              </div>
            </div>
          </div>
          <div className="absolute top-[849px] left-[0px] w-[1258px] h-[862px]">
            <div className="absolute top-[2px] left-[0px] w-[1257px] h-[860px]">
              <img
                className="absolute top-[0px] left-[0px] w-[1257px] h-[770px] overflow-hidden object-cover"
                alt=""
                src="/figure--picture--works3png@2x.png"
              />
              <div className="absolute top-[802px] left-[0px] w-[139.6px] h-[30px] overflow-hidden">
                <div className="absolute top-[-1px] left-[0px] w-[69px] h-[31px]">
                  <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium">
                    HackIT
                  </div>
                  <div className="absolute w-full right-[0%] bottom-[0px] left-[0%] bg-white h-0.5" />
                </div>
              </div>
              <div className="absolute top-[847px] left-[0px] text-base leading-[16px] font-poppins">
                Product design
              </div>
              <div className="absolute top-[807px] left-[1095.5px] rounded-43xl flex flex-col items-start justify-start py-3 px-[18px] border-[1px] border-solid border-white">
                <div className="w-[125.9px] relative h-[30px]">
                  <div className="absolute top-[0px] left-[0px] w-[125.9px] h-[30px]">
                    <div className="absolute top-[0px] left-[0px] leading-[150%] capitalize">
                      Case Study
                    </div>
                    <img
                      className="absolute h-[42%] w-[10.25%] top-[29%] right-[0%] bottom-[29%] left-[89.75%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/group-60173.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[0.5px] w-[1257.5px] h-[771.6px] object-cover"
              alt=""
              src="/hackit-mockup-1-1@2x.png"
            />
          </div>
          <div className="absolute w-[calc(100%_-_693.9px)] top-[calc(50%_-_1281px)] right-[693.9px] left-[0px] h-[755px] font-inter">
            <div className="absolute w-full top-[calc(50%_-_377.5px)] right-[0px] left-[0px] h-[755px]">
              <img
                className="absolute w-full top-[calc(50%_-_377.5px)] right-[0px] left-[0px] max-w-full overflow-hidden h-[665px] object-cover"
                alt=""
                src="/figure--picture--works1png@2x.png"
              />
              <div className="absolute top-[695px] left-[0px] w-[124.8px] h-[30px] overflow-hidden">
                <div className="absolute top-[-1px] left-[0px] leading-[30px] font-medium">
                  Ihswaryam
                </div>
                <div className="absolute w-[84.13%] right-[15.87%] bottom-[0px] left-[0%] bg-white h-0.5" />
              </div>
              <div className="absolute top-[735px] left-[0px] text-base leading-[16px] flex items-center w-[76.6px] h-5">
                Animation
              </div>
            </div>
            <div className="absolute top-[699px] left-[402.5px] rounded-43xl flex flex-col items-start justify-start py-3 px-[18px] font-new-york border-[1px] border-solid border-white">
              <div className="w-[125.9px] relative h-[30px]">
                <div className="absolute top-[0px] left-[0px] w-[125.9px] h-[30px]">
                  <div className="absolute top-[0px] left-[0px] leading-[150%] capitalize">
                    Case Study
                  </div>
                  <img
                    className="absolute h-[42%] w-[10.25%] top-[29%] right-[0%] bottom-[29%] left-[89.75%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-60173.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_692.5px)] top-[calc(50%_-_1281px)] right-[0px] left-[692.5px] h-[582px] font-inter">
            <div className="absolute w-[calc(100%_-_0.4px)] top-[calc(50%_-_291px)] right-[0.4px] left-[0px] h-[581.6px]">
              <div className="absolute w-[calc(100%_-_1px)] top-[calc(50%_-_290.8px)] right-[1px] left-[0px] h-[581.6px]">
                <img
                  className="absolute w-full top-[calc(50%_-_290.8px)] right-[0px] left-[0px] max-w-full overflow-hidden h-[491.6px] object-cover"
                  alt=""
                  src="/figure--picture--works2png@2x.png"
                />
                <div className="absolute top-[521.6px] left-[0px] w-[170.1px] h-[30px] overflow-hidden">
                  <div className="absolute top-[-1px] left-[0px] leading-[30px] font-medium">
                    Tara Fabrics
                  </div>
                  <div className="absolute w-[68.78%] right-[30.92%] bottom-[-0.4px] left-[0.29%] bg-white h-0.5" />
                </div>
                <div className="absolute top-[561.6px] left-[0px] text-base leading-[16px] flex items-center w-[117.1px] h-5">
                  Product design
                </div>
              </div>
              <img
                className="absolute top-[0px] left-[1px] w-[564.5px] h-[491.6px] object-cover"
                alt=""
                src="/tara-mockup-1@2x.png"
              />
            </div>
            <div className="absolute top-[528px] left-[404px] rounded-43xl flex flex-col items-start justify-start py-3 px-[18px] font-new-york border-[1px] border-solid border-white">
              <div className="w-[125.9px] relative h-[30px]">
                <div className="absolute top-[0px] left-[0px] w-[125.9px] h-[30px]">
                  <div className="absolute top-[0px] left-[0px] leading-[150%] capitalize">
                    Case Study
                  </div>
                  <img
                    className="absolute h-[42%] w-[10.25%] top-[29%] right-[0%] bottom-[29%] left-[89.75%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group-60173.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[5622.6px] left-[0px] w-[1920px] h-[1376.8px] text-[28px]">
        <div className="absolute top-[0px] left-[349.5px] w-[1221px] h-[695px]">
          <div className="absolute top-[495px] left-[0px] w-[499.1px] h-[200px]">
            <div className="absolute top-[0px] left-[0px] leading-[43px] uppercase font-semibold">
              Location
            </div>
            <div className="absolute top-[59px] left-[0px] w-[499.1px] h-[141px] text-[24px]">
              <div className="absolute top-[0px] left-[0px] leading-[43px] flex items-center w-[499.1px]">
                No 4, Amman Nagar, Phase 3 , Villankurichi, Coimbatore, Tamil
                Nadu India- 641035
              </div>
              <div className="absolute top-[125px] left-[0px] text-base leading-[16px]">
                GET DIRECTION
              </div>
              <img
                className="absolute h-[8.94%] w-[2.54%] top-[89.86%] right-[70.15%] bottom-[1.21%] left-[27.31%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-60139.svg"
              />
            </div>
          </div>
          <div className="absolute top-[324px] left-[0px] w-[392px] h-[115px] text-21xl">
            <div className="absolute top-[0px] left-[0px] [text-decoration:underline] leading-[49px]">
              +91 7356140099
            </div>
            <a
              className="absolute top-[66px] left-[0px] [text-decoration:underline] leading-[49px] text-[inherit]"
              href="mailto:info@aceassured.com"
              target="_blank"
            >
              info@aceassured.com
            </a>
          </div>
          <div className="absolute top-[0px] left-[0px] text-81xl leading-[150%] capitalize font-medium">
            <p className="m-0">{`Let’s get in `}</p>
            <p className="m-0">touch</p>
          </div>
          <div className="absolute top-[277.7px] left-[593px] w-[628px] h-[417.3px] text-xl">
            <div className="absolute top-[355.3px] left-[0px] w-40 h-[62px] text-center text-base text-gray font-poppins">
              <div className="absolute top-[0px] left-[0px] w-40 h-[62px]">
                <div className="absolute top-[0px] left-[0px] rounded-[89.58px] bg-white w-40 h-[62px]" />
                <div className="absolute top-[23px] left-[calc(50%_-_43.5px)] leading-[16px] font-medium">
                  SEND NOW
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[628px] h-[33px]">
              <div className="absolute top-[0px] left-[0px] leading-[25px]">
                What’s your full name?
              </div>
              <div className="absolute top-[32.5px] left-[-0.5px] box-border w-[629px] h-px border-t-[1px] border-solid border-white" />
            </div>
            <div className="absolute top-[81px] left-[0px] w-[628px] h-[33px]">
              <div className="absolute top-[0px] left-[0px] leading-[25px]">
                What’s your email address?
              </div>
              <div className="absolute top-[32.5px] left-[-0.5px] box-border w-[629px] h-px border-t-[1px] border-solid border-white" />
            </div>
            <div className="absolute top-[162px] left-[0px] w-[628px] h-[33px]">
              <div className="absolute top-[0px] left-[0px] leading-[25px]">
                Your phone no
              </div>
              <div className="absolute top-[32.5px] left-[-0.5px] box-border w-[629px] h-px border-t-[1px] border-solid border-white" />
            </div>
            <div className="absolute top-[243px] left-[0px] w-[628px] h-[33px]">
              <div className="absolute top-[0px] left-[0px] leading-[25px]">
                Tell us about your project
              </div>
              <div className="absolute top-[32.5px] left-[-0.5px] box-border w-[629px] h-px border-t-[1px] border-solid border-white" />
            </div>
          </div>
        </div>
        <div className="absolute top-[943px] left-[calc(50%_-_960px)] w-[1920px] h-[433.8px] text-base">
          <div className="absolute top-[0px] left-[calc(50%_-_960px)] w-[1920px] h-[433.8px]">
            <div className="absolute top-[0px] left-[calc(50%_-_960px)] bg-white w-[1920px] h-[433.8px] opacity-[0]" />
            <div className="absolute top-[0.8px] left-[227.2px] w-[1465.7px] h-[342.5px]">
              <div className="absolute top-[107px] left-[0px] w-[492.8px] h-[85px] text-lg">
                <div className="absolute top-[0px] left-[0px] w-[492.8px] h-5">
                  <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[293.79998779296875px] pl-0">
                    <div className="relative leading-[20px]">
                      Subscribe to newsletter
                    </div>
                  </div>
                </div>
                <div className="absolute top-[44px] left-[0px] w-[452px] h-[41px] text-base">
                  <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start pt-[13px] pb-[9px] pr-[13px] pl-px">
                    <div className="overflow-hidden flex flex-col items-start justify-start py-0 pr-[356px] pl-0 opacity-[0.5] z-[0]">
                      <div className="relative">Your Email</div>
                    </div>
                    <div className="my-0 mx-[!important] absolute top-[calc(50%_-_8.5px)] right-[-0.2px] h-[18px] flex flex-col items-center justify-start py-px px-1.5 box-border z-[1] text-center">
                      <div className="relative leading-[16px] font-medium">
                        Subscribe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[107px] left-[835.9px] w-[316.6px] h-[116px]">
                <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[45.38999938964844px] pl-0">
                  <div className="w-[271.3px] relative leading-[29px] flex items-center">
                    <span className="w-full">
                      <p className="m-0">Location</p>
                      <p className="m-0">
                        No 4, Amman Nagar, Phase 3 , Villankurichi, Coimbatore,
                        Tamil Nadu India- 641035
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute top-[107px] left-[1245.6px] w-[220px] h-[146px]">
                <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start pt-0 pb-[22px] pr-0 pl-[15px] gap-[34px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-[166px] relative h-[61px]">
                      <div className="absolute top-[0px] left-[0px] [text-decoration:underline] leading-[29px]">
                        info@aceassured.com
                      </div>
                      <a
                        className="absolute top-[32px] left-[0px] [text-decoration:underline] leading-[29px] text-[inherit]"
                        href="https://api.whatsapp.com/send?phone=https://wa.me/917356140099"
                        target="_blank"
                      >
                        +91 7356140099
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start py-0 pr-[48.29999542236328px] pl-0">
                    <div className="flex flex-col items-start justify-center py-0 pr-[26.020000457763672px] pl-0">
                      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-[4.690000534057617px]">
                        <div className="flex flex-row items-center justify-start">
                          <img
                            className="w-[10.1px] relative h-[20.3px] overflow-hidden shrink-0"
                            alt=""
                            src="/svg.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center py-0 pr-[26.009998321533203px] pl-[25.989999771118164px]">
                      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-[4.690000534057617px]">
                        <div className="flex flex-row items-center justify-start">
                          <img
                            className="w-[20.3px] relative h-[20.3px] overflow-hidden shrink-0"
                            alt=""
                            src="/svg.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center py-0 pr-[0.01000213623046875px] pl-[25.989999771118164px]">
                      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-[4.070001602172852px]">
                        <div className="flex flex-row items-center justify-start pt-[2.299999952316284px] px-0 pb-0">
                          <img
                            className="w-[22.2px] relative h-[18.6px] overflow-hidden shrink-0"
                            alt=""
                            src="/svg.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[107px] left-[585.8px] w-[157.1px] h-[145px]">
                <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border max-w-[157.125px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start py-0 pr-[72.1300048828125px] pl-0">
                      <div className="relative leading-[29px]">About Us</div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-[76.1300048828125px] pl-0">
                      <div className="relative leading-[29px]">Services</div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-[92.1300048828125px] pl-0">
                      <div className="relative leading-[29px]">Works</div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-[101.1300048828125px] pl-0">
                      <div className="relative leading-[29px]">Team</div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-[107.1300048828125px] pl-0">
                      <div className="relative leading-[29px]">Blog</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[325.5px] left-[0px] w-[269.2px] h-[17px] text-sm">
                <div className="absolute top-[0px] left-[0px] leading-[17px]">
                  Privacy Policy
                </div>
                <div className="absolute top-[0.5px] left-[107.2px] bg-white w-px h-[15px]" />
                <div className="absolute top-[0px] left-[123.2px] leading-[17px]">
                  Terms and Conditions
                </div>
              </div>
              <div className="absolute top-[325.5px] left-[calc(50%_+_405.75px)] text-sm leading-[17px] text-center">
                Copyright © 2023 AceAssured. All rights reserved.
              </div>
              <div className="absolute top-[194.5px] left-[1.8px] box-border w-[444.7px] h-[0.5px] border-t-[0.5px] border-solid border-white" />
              <div className="absolute top-[-0.4px] left-[calc(50%_-_733.25px)] box-border w-[1466.5px] h-[0.8px] border-t-[0.8px] border-solid border-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1154.4px] left-[228px] w-[870px] h-[274.1px] font-new-york-large">
        <div className="absolute top-[0px] left-[0px] w-[870px] h-[274.1px]">
          <div className="absolute top-[0px] left-[0px] leading-[150%]">
            About Us
          </div>
          <div className="absolute top-[184.1px] left-[0px] text-xl leading-[30px] font-poppins flex items-center w-[870px]">
            At Ace Assured, we're passionate about helping small and
            medium-sized businesses succeed in today's digital age. With years
            of experience in the industry, our team of experts has the skills
            and expertise to help you achieve your business goals.
          </div>
        </div>
      </div>
      <div className="absolute top-[1115.9px] left-[1267px] flex flex-col items-start justify-start py-0 pr-[37px] pl-0 font-poppins">
        <div className="my-0 mx-[!important] absolute h-full top-[0%] bottom-[0%] left-[0px] flex flex-col items-start justify-start z-[0]">
          <div className="w-[339px] rounded-xl bg-white shadow-[0px_0px_0px_1px_#e6e8eb,_0px_8px_24px_rgba(0,_0,_0,_0.12)] h-[377px] overflow-hidden shrink-0 flex flex-col items-start justify-between py-[58px] pr-[27px] pl-[58px] box-border">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-5">
              <div className="relative leading-[124px]">100%</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-1.5 pl-0 text-lg">
              <div className="relative leading-[24px] inline-block max-w-[235px]">
                <p className="m-0">Client satisfaction reflects</p>
                <p className="m-0">our commitment to</p>
                <p className="m-0">exceptional service.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute h-full top-[0%] bottom-[0%] left-[0px] flex flex-col items-start justify-start z-[1]">
          <div className="w-[339px] rounded-xl bg-white shadow-[0px_0px_0px_1px_#e6e8eb,_0px_8px_24px_rgba(0,_0,_0,_0.12)] h-[377px] overflow-hidden shrink-0 flex flex-col items-start justify-between py-[58px] pr-[46px] pl-[58px] box-border">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-5">
              <div className="relative leading-[124px]">10+</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[7px] pl-0 text-lg">
              <div className="relative leading-[24px] inline-block max-w-[235px]">
                <p className="m-0">Years of experience in</p>
                <p className="m-0">digital industry, delivering</p>
                <p className="m-0">exceptional results for our</p>
                <p className="m-0">clients.</p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="my-0 mx-[!important] absolute top-[calc(50%_-_194.3px)] left-[-6.5px] max-w-full overflow-hidden h-[388.6px] shrink-0 object-contain z-[2]"
          alt=""
          src="/divpbaboutslider--cardwrap@2x.png"
        />
        <div className="flex flex-col items-start justify-start z-[3] text-gray">
          <div className="w-[339px] rounded-xl bg-white shadow-[0px_0px_0px_1px_#0c0c0c,_0px_8px_24px_rgba(255,_255,_255,_0.12)] h-[377px] overflow-hidden shrink-0 flex flex-col items-start justify-between py-[58px] pr-[46px] pl-[58px] box-border">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-5">
              <div className="relative leading-[124px]">1.5K</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[26px] pl-0 text-center text-lg">
              <div className="relative leading-[24px] inline-block max-w-[235px]">
                <p className="m-0">Projects completed</p>
                <p className="m-0">throughout our history</p>
                <p className="m-0">across various domains.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[calc(50%_-_960px)] w-[1920px] h-[100px] text-xl font-new-york-large">
        <div className="absolute top-[0px] left-[calc(50%_-_960px)] bg-black [backdrop-filter:blur(273px)] w-[1920px] h-[100px]" />
        <div className="absolute top-[35px] left-[977.4px] w-[694.9px] h-[30px]">
          <div className="absolute top-[0px] left-[0px] leading-[150%] capitalize">
            Home
          </div>
          <div className="absolute top-[0px] left-[175px] leading-[150%] capitalize">
            Services
          </div>
          <div className="absolute top-[0px] left-[369px] leading-[150%] capitalize">
            Company
          </div>
          <div className="absolute top-[0px] left-[576px] w-[118.9px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] w-[118.9px] h-[30px]">
              <div className="absolute top-[0px] left-[0px] w-[118.9px] h-[30px]">
                <div className="absolute top-[0px] left-[0px] leading-[150%] capitalize">
                  Contact Us
                </div>
                <img
                  className="absolute h-[42%] w-[10.85%] top-[29%] right-[0%] bottom-[29%] left-[89.15%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-60173.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1721.9px] left-[calc(50%_-_732px)] w-[1315px] h-[632.8px] text-21xl">
        <div className="absolute top-[0px] left-[calc(50%_-_656.5px)] w-[382px] h-[100px] text-41xl">
          <div className="absolute top-[0px] left-[calc(50%_-_191px)] w-[382px] h-[100px]">
            <div className="absolute top-[0px] left-[calc(50%_-_191px)] leading-[100px] font-semibold">
              Our Expertise
            </div>
          </div>
        </div>
        <div className="absolute top-[143.7px] left-[calc(50%_-_657.5px)] w-[1315px] h-[263.1px]">
          <div className="absolute top-[0px] left-[calc(50%_-_657.5px)] w-[477px] h-[100px]">
            <div className="absolute top-[0px] left-[calc(50%_-_238.5px)] w-[477px] h-[100px]">
              <div className="absolute top-[0px] left-[calc(50%_-_238.5px)] leading-[100px]">
                Digital Consulting Services
              </div>
            </div>
          </div>
          <div className="absolute top-[262.6px] left-[-0.5px] box-border w-[1316px] h-px border-t-[1px] border-solid border-white" />
        </div>
        <div className="absolute top-[418.8px] left-[calc(50%_-_657.5px)] w-[1315px] h-[101px]">
          <div className="absolute top-[0px] left-[calc(50%_-_657.5px)] w-[453px] h-[100px]">
            <div className="absolute top-[0px] left-[calc(50%_-_226.5px)] w-[453px] h-[100px]">
              <div className="absolute top-[0px] left-[calc(50%_-_226.5px)] leading-[100px]">
                Application Development
              </div>
            </div>
          </div>
          <div className="absolute top-[100.5px] left-[-0.5px] box-border w-[1316px] h-px border-t-[1px] border-solid border-white" />
        </div>
        <div className="absolute top-[531.8px] left-[calc(50%_-_657.5px)] w-[1315px] h-[101px]">
          <div className="absolute top-[0px] left-[calc(50%_-_657.5px)] w-[483px] h-[100px]">
            <div className="absolute top-[0px] left-[calc(50%_-_241.5px)] w-[483px] h-[100px]">
              <div className="absolute top-[0px] left-[calc(50%_-_241.5px)] leading-[100px]">
                Digital Marketing Solutions
              </div>
            </div>
          </div>
          <div className="absolute top-[100.5px] left-[-0.5px] box-border w-[1316px] h-px border-t-[1px] border-solid border-white" />
        </div>
        <div className="absolute top-[195.7px] left-[1272px] bg-white w-[33px] h-0.5 [transform:_rotate(-180deg)] [transform-origin:0_0]" />
        <div className="absolute top-[448.3px] left-[1239px] w-[33px] h-[33px]">
          <div className="absolute top-[15.5px] left-[0px] bg-white w-[33px] h-0.5" />
          <div className="absolute top-[0px] left-[17.5px] bg-white w-[33px] h-0.5 [transform:_rotate(90deg)] [transform-origin:0_0]" />
        </div>
        <div className="absolute top-[561.3px] left-[1239px] w-[33px] h-[33px]">
          <div className="absolute top-[15.5px] left-[0px] bg-white w-[33px] h-0.5" />
          <div className="absolute top-[0px] left-[17.5px] bg-white w-[33px] h-0.5 [transform:_rotate(90deg)] [transform-origin:0_0]" />
        </div>
        <div className="absolute top-[253.9px] left-[0px] text-xl leading-[32px] font-poppins">
          <p className="m-0">
            Est quis reprehenderit non labore consequat occaecat aute mollit.
            Enim officia cillum ut et eiusmod fugiat enim ad
          </p>
          <p className="m-0">
            reprehenderit velit. Consectetur dolore proident ex excepteur quis
            fugiat et Lorem ipsum laborum est sunt ullamco.
          </p>
          <p className="m-0">
            Est quis reprehenderit non labore consequat occaecat aute mollit.
            Enim officia cillum ut et eiusmod fugiat enim ad
          </p>
          <p className="m-0">
            reprehenderit velit. Consectetur dolore proident ex excepteur quis
            fugiat et Lorem ipsum.
          </p>
        </div>
      </div>
      <img
        className="absolute top-[30px] left-[1759.8px] w-20 h-10 object-cover"
        alt=""
        src="/component-4@2x.png"
      />
      <img
        className="absolute top-[30px] left-[1759.8px] w-20 h-10 object-cover"
        alt=""
        src="/component-5@2x.png"
      />
      <div className="absolute top-[185px] left-[879.7px] w-[836.1px] h-[597.9px]">
        <img
          className="absolute top-[0px] left-[0px] w-[832.1px] h-[597.9px] object-cover"
          alt=""
          src="/rectangle-15852@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] w-[836.1px] h-[597.9px]">
          <div className="absolute top-[0px] left-[0px] w-[836.1px] h-[597.9px]">
            <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#fff,_#000_0.01%,_rgba(0,_0,_0,_0))] w-[832.1px] h-[39.5px]" />
            <div className="absolute top-[597.9px] left-[3.9px] [background:linear-gradient(180deg,_#fff,_#000_0.01%,_rgba(0,_0,_0,_0))] w-[832.1px] h-[39.5px]" />
            <div className="absolute top-[597.9px] left-[832.1px] [background:linear-gradient(180deg,_#fff,_#000_0.01%,_rgba(0,_0,_0,_0))] w-[597.9px] h-[39.5px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
            <div className="absolute top-[597.9px] left-[0px] [background:linear-gradient(180deg,_#fff,_#000_0.01%,_rgba(0,_0,_0,_0))] w-[597.9px] h-[39.5px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
          </div>
        </div>
      </div>
      <div className="absolute top-[305px] left-[247.8px] w-[1129.1px] h-[418px] text-[119px] font-new-york-large">
        <div className="absolute top-[0px] left-[0px] leading-[150%] capitalize flex items-center w-[1129.1px]">
          Stay ahead with our exclusive Insights
        </div>
        <div className="absolute top-[388px] left-[0px] text-xl leading-[30px] font-poppins">
          Digital Solutions For Everyday Business
        </div>
      </div>
      <div className="absolute top-[78px] left-[1756px] w-[88px] h-[18px] text-[17.2px] font-nightcore-demo">
        <div className="absolute top-[18px] left-[88px] tracking-[0.09em] leading-[17.23px] [transform:_rotate(180deg)] [transform-origin:0_0]">
          Hey Batman!
        </div>
      </div>
      <img
        className="absolute top-[12px] left-[229px] w-[129px] h-[76px] overflow-hidden"
        alt=""
        src="/ace-logo-1.svg"
      />
    </div> */}
      </Stairs>
    </>
  );
}
