import React from "react";

const defaultThumbnail =
  "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg";

const handleOnError = (e) => {
  e.target.src = defaultThumbnail;
};

const Image = (props) => {
  return <img onError={handleOnError} {...props} />;
};

export default Image;
