import React from "react";

class ImageList extends React.Component {
  state = {};

  render() {
    const images = this.props.images.map(({ description, id, urls }) => {
      return <img key={id} alt={description} src={urls.small} />;
    });

    return <div>{images}</div>;
  }
}

export default ImageList;
