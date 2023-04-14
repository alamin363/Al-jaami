import React, { useEffect, useState } from "react";

const Loader = () => {
  return (
    <div className="preloader">
      <div className="sk-cube-grid">
        <span className="sk-cube"></span>
        <span className="sk-cube"></span>
        <span className="sk-cube"></span>
        <span className="sk-cube"></span>
        <span className="sk-cube"></span>
        <span className="sk-cube"></span>
        <span className="sk-cube"></span>
        <span className="sk-cube"></span>
        <span className="sk-cube"></span>
      </div>
    </div>
  );
};

export default Loader;

export const Loaders = () => {
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    const time = setTimeout(() => {
      setPageLoading(false);
    }, 500);

    return () => {
      clearTimeout(time);
    };
  }, []);

  return <div>{pageLoading && <Loader />}</div>;
};
