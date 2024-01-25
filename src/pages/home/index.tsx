import ThemeSwitcher from "@/components/navbar/theme-switcher";
import { Inter } from "next/font/google";
import NavBar from "./components/nav-bar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import AboutUs from "./components/about-us";
import Expertise from "./components/expertise";
import GetInTouch from "./components/get-in-touch";
import RecentWorks from "./components/recent-works";
import Stairs from "../../components/stair_animation/index";
import ScrollAnimate from "@/components/stair_animation/scroll-animation";

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
