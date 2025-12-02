import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function PingSection() {
  const headingRef = useRef(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          cardRef.current,
          { y: 50, opacity: 0, scale: 0 },
          { y: 0, opacity: 1, scale: 1, duration: 1 },
          "-=0.4"
        )
        .fromTo(
          inputRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.3"
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.3"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0f0f0f] flex flex-col justify-center items-center px-6 py-20">
      <h1
        ref={headingRef}
        className="text-4xl md:text-5xl font-bold mb-10 text-center text-white"
      >
        Drop a <span className="text-blue-400">Ping</span>
      </h1>

      <div
        ref={cardRef}
        className="w-full max-w-xl bg-[#1a1a1a] rounded-2xl p-8 shadow-xl border border-white/10"
      >
        <label htmlFor="pingText" className="text-white/80 text-lg font-medium">
          Write your ping
        </label>

        <textarea
          id="pingText"
          ref={inputRef}
          placeholder="Share what's on your mind..."
          rows={5}
          className="w-full mt-3 p-4 rounded-xl bg-black/40 text-white border border-white/20 outline-none focus:border-blue-400 transition-all resize-none"
        />

        <button
          ref={buttonRef}
          type="button"
          className="ping-btn px-8 py-3 text-white font-semibold rounded-xl mt-6 w-full transition-all"
        >
          Submit Ping
        </button>
      </div>
    </div>
  );
}