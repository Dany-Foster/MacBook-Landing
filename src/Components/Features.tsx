import { useGSAP } from "@gsap/react";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import gsap from "gsap";
import { Suspense, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import type * as THREE from "three";
import { features, featureSequence } from "../data/Factice";
import useMacBookStore from "../Hooks/useMAcBookStore";
import MaccBook from "./models/Macbook";
import StudioLights from "./StudioLights";

const ModelScroll = () => {
  const groupRef = useRef<THREE.Group>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const { setTexture } = useMacBookStore();

  useEffect(() => {
    featureSequence.forEach((feature) => {
      const v = document.createElement("video");

      Object.assign(v, {
        src: feature.videoPath,
        muted: true,
        playInline: true,
        preload: "auto",
        crossOrigin: "anonymous",
      });

      v.load();
    });
  }, []);

  useGSAP(() => {
    // animation de la rotation du modèle en fonction du scroll
    const ModelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    // animation des textures et features en fonction du scroll
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    if (groupRef.current) {
      ModelTimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }

    timeline
      .call(() => setTexture(featureSequence[0].videoPath))
      .to(featureSequence[0].boxClass, {
        opacity: 1,
        y: 0,
        delay: featureSequence[0].delay,
      })

      .call(() => setTexture(featureSequence[1].videoPath))
      .to(featureSequence[1].boxClass, {
        opacity: 1,
        y: 0,
        delay: featureSequence[1].delay,
      })

      .call(() => setTexture(featureSequence[2].videoPath))
      .to(featureSequence[2].boxClass, {
        opacity: 1,
        y: 0,
        delay: featureSequence[2].delay,
      })

      .call(() => setTexture(featureSequence[3].videoPath))
      .to(featureSequence[3].boxClass, {
        opacity: 1,
        y: 0,
        delay: featureSequence[3].delay,
      })

      .call(() => setTexture(featureSequence[4].videoPath))
      .to(featureSequence[4].boxClass, {
        opacity: 1,
        y: 0,
        delay: featureSequence[4].delay,
      });
  }, []);

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html center>
            <h1 className="text-white text-3xl">Loading...</h1>
          </Html>
        }
      >
        <MaccBook scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};
const Features = () => {
  return (
    <section id="features">
      <h2>See it all in a new light. </h2>
      <Canvas
        id="f-canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLights />
        <ambientLight intensity={0.5} />
        <ModelScroll />
      </Canvas>
      <div className="absloute inset-0">
        {features.map((feature, index) => (
          <div className={clsx("box", `box${index + 1}`, feature.styles)}>
            <img src={feature.icon} alt={feature.highlight} />
            <p>
              <span className="text-white text-lg">{feature.highlight}</span>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
