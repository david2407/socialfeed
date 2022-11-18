import React from "react";
import "./SimplePost.scss";
import { useLocation } from "react-router-dom";
import BackButton from "../backbutton/BackButton";

const SimplePost = () => {
  const location = useLocation();

  return (
    <div className="simplepost">
      <div className="simplepost__title">Post id: {location.state?.id}</div>
      <p />
      <div className="simplepost__text">{location.state?.text}</div>
      <p />
      <div className="simplepost__author">
        Author: {location.state?.user.name}{" "}
      </div>
      <div className="simplepost__date">Date: {location.state?.created_at}</div>
      <div className="simplepost__network">
        Network: {location.state?.network}
      </div>
      <p/>
      <div className="simplepost__url">
        Post URL:{" "}
        {
          <a href={location.state?.entities.urls[0].expanded_url}>
            {location.state?.entities.urls[0].expanded_url}
          </a>
        }
      </div>
      <p />
      <BackButton />
    </div>
  );
};

export default SimplePost;
