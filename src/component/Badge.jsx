import React from 'react';

const Badge = ({ status }) => {
  let bgColor;

  if (status === "Alive") {
    bgColor = "green";
  } else if (status === "Dead") {
    bgColor = "red";
  } else {
    bgColor = "gray";
  }

  return (
    <div
      className="absolute top-5 right-2 p-2 rounded text-white"
      style={{ backgroundColor: bgColor }}
    >
      {status}
    </div>
  );
};

export default Badge;
