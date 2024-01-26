import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/home/nav-bar";
import Banner from "@/components/home/banner";
import Expertise from "@/components/home/expertise";
import RecentWorks from "@/components/home/recent-works";
import GetInTouch from "@/components/home/get-in-touch";
import Footer from "@/components/home/footer";
import AboutUs from "@/components/home/about-us";
import ScrollProgress from "@/components/animation/scroll-progress";
import Stairs from "@/components/animation";
import ScrollAnimate from "@/components/animation/scroll-animation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Stairs backgroundColor={"#fff"}>
        <ScrollProgress>
          <div className="bg-secondary text-primary">
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
            <RecentWorks />
            <ScrollAnimate>
              <GetInTouch />/
            </ScrollAnimate>
            <ScrollAnimate>
              <Footer />
            </ScrollAnimate>
          </div>
        </ScrollProgress>
      </Stairs>
    </>
  );
}
