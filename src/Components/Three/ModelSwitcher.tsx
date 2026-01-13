import { useGSAP } from "@gsap/react";
import { PresentationControls } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";
import * as THREE from "three";
import MacBookModels14 from "../models/Macbook-14";
import { MacBookModels16 } from "../models/Macbook-16";

const ANIMATION_DURATION = 1;
const OFFSET_MESH = 5;

const fadeMesh = (group: THREE.Group | null, opacity: number) => {
  if (!group) return;

  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.transparent = true;
      gsap.to(child.material, {
        opacity,
        duration: ANIMATION_DURATION,
      });
    }
  });
};

const MouveGroup = (
  group: { position: gsap.TweenTarget } | null,
  x: number
) => {
  if (!group) return;
  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

const ModelSwitcher = ({
  scale,
  isMobile,
}: {
  scale: number;
  isMobile: boolean;
}) => {
  const smallMacBookRef = useRef<THREE.Group | null>(null);
  const largeMacBookRef = useRef<THREE.Group | null>(null);

  const SCALE_DESKTOP = 0.08;
  const SCALE_MOBILE = 0.05;

  const ShowLargeMacBook = scale === SCALE_DESKTOP || scale === SCALE_MOBILE;

  useGSAP(() => {
    if (ShowLargeMacBook) {
      MouveGroup(smallMacBookRef.current, -OFFSET_MESH);
      MouveGroup(largeMacBookRef.current, 0);

      fadeMesh(smallMacBookRef.current, 0);
      fadeMesh(largeMacBookRef.current, 1);
    } else {
      MouveGroup(smallMacBookRef.current, 0);
      MouveGroup(largeMacBookRef.current, OFFSET_MESH);

      fadeMesh(smallMacBookRef.current, 1);
      fadeMesh(largeMacBookRef.current, 0);
    }
  }, [scale]);

  const tuple = <T extends [number, number]>(v: T) => v;

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: tuple([-Infinity, Infinity]),
    polar: tuple([-Math.PI, Math.PI]),
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacBookRef}>
          <MacBookModels16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={smallMacBookRef}>
          <MacBookModels14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
