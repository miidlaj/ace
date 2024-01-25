import ThemeSwitcher from "@/components/navbar/theme-switcher";
import { Inter } from "next/font/google";
import NavBar from "../../components/home/nav-bar";
import Banner from "../../components/home/banner";
import Footer from "../../components/home/footer";
import AboutUs from "../../components/home/about-us";
import Expertise from "../../components/home/expertise";
import GetInTouch from "../../components/home/get-in-touch";
import RecentWorks from "../../components/home/recent-works";
import Stairs from "../../components/animation/index";
import ScrollAnimate from "@/components/animation/scroll-animation";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
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
