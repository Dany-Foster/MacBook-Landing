import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Couverture from "./Components/Couverture";
import Navbar from "./Components/Navbar";
import ProduitView from "./Components/ProduitView";

gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Couverture />
      <ProduitView />
    </main>
  );
}

export default App;
