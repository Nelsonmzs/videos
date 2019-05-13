import React from "react";

const VideoList = () => {
  return (
    <ul className="video-list">
      <li className="video">
        <img
          src="https://storage.googleapis.com/coverr-public/poster/Play_Date.jpg"
          alt=""
        />
        <div>Play-Date</div>
      </li>

      <li className="video">
        <img
          src="https://storage.googleapis.com/coverr-public/poster/best_buddys.jpg"
          alt=""
        />
        <div>best-buddys</div>
      </li>

      <li className="video">
        <img
          src="https://storage.googleapis.com/coverr-public/poster/Dog-and-Fly.jpg"
          alt=""
        />
        <div>Dog-and-Fly</div>
      </li>
    </ul>
  );
};

export default VideoList;
