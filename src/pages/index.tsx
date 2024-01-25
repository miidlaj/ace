import Image from "next/image";
import { Inter } from "next/font/google";
import Stairs from "../components/stair_animation/index";
import NavBar from "@/components/home/nav-bar";
import ScrollAnimate from "@/components/stair_animation/scroll-animation";
import Banner from "@/components/home/banner";
import Expertise from "@/components/home/expertise";
import RecentWorks from "@/components/home/recent-works";
import GetInTouch from "@/components/home/get-in-touch";
import Footer from "@/components/home/footer";
import AboutUs from "@/components/home/about-us";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Stairs backgroundColor={"#fff"}>
        <div className="bg-black text-white">
          <NavBar />
          <ScrollAnimate>
            <Banner />
          </ScrollAnimate>

          <ScrollAnimate>
            <AboutUs />
          </ScrollAnimate>

          <ScrollAnimate>
            <Expertise />
          </ScrollAnimate>

          <ScrollAnimate>
            <RecentWorks />
          </ScrollAnimate>

          <ScrollAnimate>
            <GetInTouch />
          </ScrollAnimate>
          <Footer />
        </div>
      </Stairs>
    </>
  );
}
