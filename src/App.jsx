import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import WhatIDo from "./sections/WhatIDo";
import PlatformPerformance from "./sections/PlatformPerformance";
import CampaignExperience from "./sections/CampaignExperience/CampaignExperience";
import Featured from "./sections/Featured";
import Process from "./sections/Process";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";

export default function App() {
  return <><Navbar /><main><Hero /><About /><WhatIDo /><PlatformPerformance /><CampaignExperience /><Featured /><Process /><Tools /><Contact /></main><Footer /></>;
}
