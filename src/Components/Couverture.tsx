import { useEffect, useRef } from "react";

const Couverture = () => {
  const videoRef = useRef<HTMLVideoElement>();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);
  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="Titre" />
      </div>

      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

      <button>Buy</button>
      <p>From $1599 or $133.25/month for 12 month</p>
    </section>
  );
};

export default Couverture;
