import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {title, channelTitle, thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-72'>
        <img className='rounded-3xl shadow-lg' src={thumbnails.medium.url} alt={title}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard