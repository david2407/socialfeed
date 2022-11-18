import React from "react";
import { useNavigate } from "react-router-dom";
import './BackButton.scss'

const BackButton = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/");
  };
  return (
    <button className="backbutton"
      onClick={() => {
        navigateTo();
      }}
    >
      Back to post list
    </button>
  );
};

export default BackButton;
