import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import useMacBookStore from "../Hooks/useMAcBookStore";
import StudioLights from "./StudioLights";
import ModelSwitcher from "./Three/ModelSwitcher";
const ProduitView = () => {
  const { color, setColor, scale, setScale } = useMacBookStore();

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <section id="product-viewer">
      <h2>Take a closer look. </h2>

      <div className="controls">
        <p className="info">
          Macbook Pro available in 14" and 16" in Space Gray and Black
        </p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5bd" && "active"
              )}
            />
            <div
              onClick={() => setColor("#777")}
              className={clsx("bg-neutral-500", color === "#777" && "active")}
            />
          </div>
          <div className="size-control">
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>16"</p>
            </div>
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>14"</p>
            </div>
          </div>
        </div>
      </div>
      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLights />
        <ModelSwitcher
          scale={isMobile ? scale - 0.03 : scale}
          isMobile={isMobile}
        />
      </Canvas>
    </section>
  );
};

export default ProduitView;
