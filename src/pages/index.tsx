import Image from "next/image";
import { Inter } from "next/font/google";
\import NavBar from "@/components/home/nav-bar";
import Banner from "@/components/home/banner";
import Expertise from "@/components/home/expertise";
import RecentWorks from "@/components/home/recent-works";
import GetInTouch from "@/components/home/get-in-touch";
import Footer from "@/components/home/footer";
import AboutUs from "@/components/home/about-us";
import Slide from "@/components/animation/scroll-animation";
import ScrollProgress from "@/components/animation/scroll-progress";
import Stairs from "@/components/animation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Stairs backgroundColor={"#fff"}>
        <ScrollProgress>
          <div className="bg-secondary text-primary">
            <Slide delay={0.3}>
              <NavBar />
            </Slide>
            <Slide delay={0.3}>
              <Banner />
            </Slide>
            <Slide delay={0.3}>
              <AboutUs />
            </Slide>
            <Slide delay={0.3}>
              <Expertise />
            </Slide>
            <Slide delay={0.3}>
              <RecentWorks />
            </Slide>
            <Slide delay={0.3}>
              <GetInTouch />/
            </Slide>
            <Slide delay={0.3}>
              <Footer />
            </Slide>
          </div>
        </ScrollProgress>
      </Stairs>
    </>
  );
}
