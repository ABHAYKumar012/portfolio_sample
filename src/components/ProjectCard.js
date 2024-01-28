import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import ReactPlayer from "react-player";

export const ProjectCard = ({ title, description, imgUrl, videoUrl }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleCardClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleCardClick}>
        {showVideo && (
          <div className="video-container">
            <ReactPlayer
              url={videoUrl}
              controls
              width="100%"
              height="auto"
              playing
            />
          </div>
        )}
        {!showVideo && <img src={imgUrl} />}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      {showVideo && (
        <div className="close-button-container">
          <Button variant="primary" onClick={handleCloseVideo}>
            Close Video
          </Button>
        </div>
      )}
    </Col>
  );
};
