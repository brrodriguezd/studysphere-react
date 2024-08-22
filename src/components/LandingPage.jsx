import { Navigation } from "./landingpage/Navigation";
import { Header } from "./landingpage/Header";
import { About } from "./landingpage/About";
import { Services } from "./landingpage/Services";
import { Team } from "./landingpage/Team";
import { Contact } from "./landingpage/Contact";
import SmoothScroll from "smooth-scroll";
import "./LandingPage.css";
import { Manuales } from "./landingpage/Manual";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const LandingPage = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Services />
      <Team />
      <Contact />
      <Manuales />
    </div>
  );
};

export default LandingPage;
