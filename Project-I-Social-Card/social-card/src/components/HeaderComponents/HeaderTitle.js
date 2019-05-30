import React from "react";
import TimeAgo from "react-timeago";

import "./Header.css";

const HeaderTitle = () => {
  return (
    <div className="post-meta">
      <span className="post-displayname">Lambda School</span>
      <span className="post-username">LambdaSchool</span>
      <span className="post-pubdate">
        <TimeAgo date="May 10, 2019" />
      </span>
    </div>
  );
};

export default HeaderTitle;
