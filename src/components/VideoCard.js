import React from "react";

const VideoCard = ({ video }) => {
  const {
    snippet: { channelTitle, title, thumbnails },
    statistics,
  } = video;

  return (
    <div className="p-2 m-2 w-72 h-full flex flex-col justify-between shadow-lg rounded-lg">
      <div>
        <img
          className="rounded-lg"
          src={thumbnails.medium.url}
          alt="thumbnail"
        />
        <div className="mt-2">
          <h4 className="font-bold overflow-hidden max-lines-2">
            <div className="line-clamp-2">{title}</div>
          </h4>
        </div>
      </div>
      <div>
        <p className="text-gray-600">{channelTitle}</p>
        <p className="text-gray-600">{statistics.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
