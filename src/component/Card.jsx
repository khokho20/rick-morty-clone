import React from "react";
import Badge from "./Badge";
import { Link } from "react-router-dom";

function Card({ image, id, name, status, location }) {
  return (
    <a href={`/${id}`}>
    <div className="w-64 relative min-h-[400px] border-2 border-solid border-blue-600 rounded-xl overflow-hidden">
      <div className="h-3/5">
        <img src={image} alt={`${name}`} className="w-full h-full object-cover" />
      </div>
      <Badge status={status} />
      <div className="p-2 h-2/5 flex flex-col gap-2">
        <p className="text-lg font-semibold pt-3">{name}</p>
        <div>
          <span className="text-xs">Last Location</span>
          <p className="text-base font-medium">{location}</p>
        </div>
      </div>
    </div>
    </a>
  );
}

export default Card;
