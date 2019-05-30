import React from "react";

import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";

import "./Header.css";

const HeaderContainer = () => {
  return (
    <header className="post-header">
      <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent />
    </header>
  );
};

export default HeaderContainer;
