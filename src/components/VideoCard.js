import React from 'react'

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="p-3 m-3 w-72 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <img
        className="rounded-2xl w-full object-cover"
        src={thumbnails.medium.url}
        alt={title}
      />
      <ul className="mt-3 space-y-1 flex-grow">
        <li
          className="font-semibold text-lg h-12 overflow-hidden"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
          title={title}
        >
          {title}
        </li>
        <li className="text-gray-600 text-sm">{channelTitle}</li>
        <li className="text-gray-500 text-xs">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
