import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import WindowControls from '#components/WindowControls'

const Video = () => {
    const {windows} = useWindowStore();
    const data = windows.vidfile?.data;
    if(!data) return null;
    const {name, videoUrl} = data;
  return (
    <>
    <div id="window-header">
        <WindowControls target='vidfile'/>
        <h2>{name}</h2>
    </div>

    <div className='p-5 bg-white'>
        {
            videoUrl ? (
                <div className='w-full'>
                    <video src={videoUrl} controls className='w-full h-auto rounded'>
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : (
                <p className='text-gray-500'>No video available</p>
            )
        }
    </div>
    
    </>
  )
}

const VideoWindow = WindowWrapper(Video, 'vidfile');
export default VideoWindow;
