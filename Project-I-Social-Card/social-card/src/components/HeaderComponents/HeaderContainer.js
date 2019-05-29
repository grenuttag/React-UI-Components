import React from "react";

import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";

import "./Header.css";

class HeaderContainer extends React.Component {
  render() {
    return (
      <header className="post-header">
        <ImageThumbnail />
        <HeaderTitle />
        <HeaderContent />
      </header>
    );
  }
}

export default HeaderContainer;
