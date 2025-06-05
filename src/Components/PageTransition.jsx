import React, { useEffect, useState } from "react";
import "./PageTransition.css";

const PageTransition = ({ onComplete }) => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActive(false);
      onComplete();
    }, 700);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return active && <div className="page-fade-transition" />;
};

export default PageTransition;
