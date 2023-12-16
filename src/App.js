import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedOn from "./Components/FeaturedOn";
import Integer from "./Components/Integer";
import LongTerm from "./Components/LongTerm";
import Myfooter from "./Components/Myfooter";
import { Myheader } from "./Components/Myheader";
import Project from "./Components/Project";
import TeamFull from "./Components/TeamFull";
import TellUs from "./Components/TellUs";
import VipeStudio from "./Components/VipeStudio";
import Viptor from "./Components/Viptor";
import BackToTop from "./Components/BackToTop";

function App() {
  return (
    <div className=" overflow-hidden">
      <BackToTop />
      <Myheader />
      <TellUs />
      <FeaturedOn />
      <Integer />
      <VipeStudio />
      <LongTerm />
      <Project />
      <TeamFull />
      <Viptor />
      <Myfooter />
    </div>
  );
}

export default App;
