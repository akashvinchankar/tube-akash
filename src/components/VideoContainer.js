import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEO_API);
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 ml-4">Latest Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard key={video.id.videoId} video={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
