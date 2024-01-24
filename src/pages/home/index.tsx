import ThemeSwitcher from "@/components/navbar/theme-switcher";
import { Inter } from "next/font/google";
import NavBar from "./components/nav-bar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import AboutUs from "./components/about-us";
import Expertise from "./components/expertise";
import GetInTouch from "./components/get-in-touch";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <>
      <div className="bg-black text-white">
        <NavBar />
        <Banner />
        <AboutUs />
        <Expertise />
        <GetInTouch/>
        <Footer />
      </div>
    </>
  );
}
