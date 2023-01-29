import React from "react";

function Banner({ variant, children }) {
  return (
    <div className={`banner ${variant}`}>
      <p>{children}</p>
    </div>
  );
}

export default Banner;
