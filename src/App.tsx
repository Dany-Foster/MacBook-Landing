import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Couverture from "./Components/Couverture";
import Features from "./Components/features";
import Footer from "./Components/Footer";
import Highlights from "./Components/Highlights";
import Navbar from "./Components/Navbar";
import Performance from "./Components/Performance";
import ProduitView from "./Components/ProduitView";
import Showcase from "./Components/showcase/Showcase";

gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Couverture />
      <ProduitView />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
}

export default App;
