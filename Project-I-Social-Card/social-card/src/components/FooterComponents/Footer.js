import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faEnvelope
} from "@fortawesome/free-regular-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

library.add(faComment, faRetweet, faHeart, faEnvelope);

const Footer = () => {
  return (
    <section className="post-actions">
      <span className="post-action">
        <FontAwesomeIcon icon={["far", "comment"]} />
        <span className="action-count">1K</span>
      </span>
      <span className="post-action">
        <FontAwesomeIcon icon={["fas", "retweet"]} />
        <span className="action-count">5K</span>
      </span>
      <span className="post-action">
        <FontAwesomeIcon icon={["far", "heart"]} />
        <span className="action-count">10K</span>
      </span>
      <span className="post-action">
        <FontAwesomeIcon icon={["far", "envelope"]} />
      </span>
    </section>
  );
};

export default Footer;
