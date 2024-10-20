import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  bgColor,
  title,
  description,
  link,
  buttonText,
  buttonBgColor,
  buttonHoverColor,
}) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">{description}</p>
      <Link
        to={link}
        className={`inline-block ${buttonBgColor} text-white rounded-lg px-4 py-2 ${buttonHoverColor}`}
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default Card;
