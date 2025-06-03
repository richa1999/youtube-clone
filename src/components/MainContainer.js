import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className="overflow-hidden px-4 py-6 max-w-screen-xl mx-auto">
      <ButtonList />
      <div className="mt-6">
        <VideoContainer />
      </div>
    </div>
  )
}

export default MainContainer
