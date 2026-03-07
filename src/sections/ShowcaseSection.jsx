import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <h3 className="showcase-category-title">Real Projects</h3>
        <div className="showcase-grid">
          <div className="project-card" ref={ycDirectoryRef}>
            <div className="project-image bg-[#FFE7EB]">
              <img src="/images/project1.png" alt="Crosscan" />
            </div>
            <div className="flex align-center gap-2">
              <h2>Crosscan</h2>
              <a href="https://crosscan.com/en/" target="_blank">
                <img className="w-8 h-8" src="/images/link-svgrepo-com.svg" alt="Link icon" />
              </a>
            </div>
            <p className="text-white-50 text-md mt-2">
              Highly accurate people counting and visitor analytics for data-driven and efficient space management
            </p>
          </div>

          <div className="project-card" ref={rydeRef}>
            <div className="project-image bg-[#FFE7EB]">
              <img src="/images/project3.png" alt="Mocion" />
            </div>
            <div className="flex align-center gap-2">
              <h2>Mocion</h2>
              <a href="https://mocion.io" target="_blank">
                <img className="w-8 h-8" src="/images/link-svgrepo-com.svg" alt="Link icon" />
              </a>
            </div>
            <p className="text-white-50 text-md mt-2">
              Effortless Padel Court Booking & Player Management Mocion
              is an app for padel players, making court booking, payments
            </p>
          </div>
        </div>

        <h3 className="showcase-category-title mt-16">Personal Projects</h3>
        <div className="showcase-grid">
          <div className="project-card" ref={libraryRef}>
            <div className="project-image bg-[#FFE7EB]">
              <img src="/images/project2.png" alt="Library App" />
            </div>
            <div className="flex align-center gap-2">
              <h2>Library Management Platform</h2>
              <a href="https://github.com/AliHasanIbrahim47/unversity-library" target="_blank">
                <img className="w-8 h-8" src="/images/link-svgrepo-com.svg" alt="Link icon" />
              </a>
            </div>
            <p className="text-white-50 text-md mt-2">
              The Library Management Platform is a web application that allows users to manage their
              library's books, users, and borrowing records.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
