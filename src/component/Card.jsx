import React from "react";
import Badge from "./Badge";

function Card({ image, name, status, location }) {
  return (
    <div className="w-64 relative min-h-[400px] border-2 border-solid border-blue-600 rounded-xl overflow-hidden">
      <div className="h-3/5">
        <img src={image} alt={`${name}`} className="w-full h-full object-cover" />
      </div>
      <Badge status={status} />
      <div className="p-2 h-2/5 flex flex-col gap-6">
        <p className="text-lg font-semibold pt-3">{name}</p>
        <div>
          <span className="text-xs">Last Location</span>
          <p className="text-base font-medium">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
