import React, { useEffect, useState } from "react";
import "./loader.css";

const Loader = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Hide loader after 5 seconds
    const timer = setTimeout(() => {
      setHide(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-container ${hide ? "slide-up-fade" : ""}`}>
      <h1 className="loader-text">React Practice</h1>
    </div>
  );
};

export default Loader;
