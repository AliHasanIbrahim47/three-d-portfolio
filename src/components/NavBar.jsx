import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeClick = (e) => {
    e.preventDefault();

    const resumeUrl = "/resume.pdf";
    
    // Option 1: Download the resume
    // const link = document.createElement("a");
    // link.href = resumeUrl;
    // link.download = "Ali_Ibrahim_Resume.pdf"; // Specify the filename for download
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);

    // Option 2: Open in new tab (uncomment below and comment out the download code above)
    window.open(resumeUrl, '_blank');
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Ali Ibrahim
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-row gap-4">
          <a
            href="#resume"
            className="contact-btn group"
            onClick={handleResumeClick}
          >
            <div className="inner">
              <span>Resume</span>
            </div>
          </a>
          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
