import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const headingLine1 = useRef(null);
  const headingLine2 = useRef(null);
  const iconRef = useRef(null);
  const boltRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headingLine1.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );

    tl.fromTo(
      headingLine2.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      "+=0.4"
    );

    const bounce = (target) => {
      gsap.fromTo(
        target,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: 3,
          onComplete: () => {
            gsap.fromTo(
              target,
              { y: 20 },
              {
                y: 0,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
              }
            );
          }
        }
      );
    };

    bounce(iconRef.current);
    bounce(boltRef.current);
  }, []);

  return (
    <>
      <Navbar />

      <div className="container-1 h-[85vh] flex flex-col justify-center items-center text-center px-6 md:px-16 relative">

        {/* Left Chat Icon */}
        <div
          ref={iconRef}
          className="chat-icon h-14 w-14 rounded-full bg-[#cdcdcda3] absolute flex items-center justify-center text-2xl border-2 border-[#ff4c05bd] left-10 opacity-0"
        >
          <i className="fa-regular fa-comments"></i>
        </div>

        {/* Right Bolt Icon */}
        <div
          ref={boltRef}
          className="bolt-icon h-14 w-14 rounded-full bg-[#cdcdcda3] absolute flex items-center justify-center text-2xl border-2 border-[#ff4c05bd] right-10 opacity-0"
        >
          <i className="fa-solid fa-bolt"></i>
        </div>

        {/* Animated Heading */}
        <h2
          className="text-4xl md:text-6xl font-semibold leading-tight"
          style={{ color: "var(--secondary)" }}
        >
          <span ref={headingLine1} className="inline-block">
            Your ideas matter here
          </span>

          <br />

          <span ref={headingLine2} className="inline-block ml-4">
            — not your{" "}
            <span style={{ color: "white", opacity: 0.25 }}>
              identity.
            </span>
          </span>
        </h2>

        {/* Button with ROUTE */}
        <button
          onClick={() => navigate("/ping")}
          className="btn mt-14 px-12 py-4 rounded-xl text-lg transition-all bg-black border-2 border-black"
        >
          Make your first ping
        </button>

      </div>

      <div className="container-2 h-[4vh] bg-[#000000da] backdrop-blur-3xl flex justify-center items-center">
        <a href="#">IntraPingOfficial@gmail.com</a>
      </div>
    </>
  );
}

export default App;
