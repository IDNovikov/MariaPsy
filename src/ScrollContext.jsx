import React, { createContext, useRef, useContext } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider
      value={{ section1Ref, section2Ref, section3Ref, scrollToSection }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  return useContext(ScrollContext);
};
