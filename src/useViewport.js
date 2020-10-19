import React from "react";

const useViewport = (setOpen) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 780) setOpen(false);
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [setOpen]);

  // Return the width so we can use it in our components
  return { width, height };
};

export default useViewport;
