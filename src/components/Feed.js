import React, { useContext, useEffect } from 'react'
import Left_nav from './Left_nav';
import { Context } from '../context/contextApi';
import VideoCard from '../components/VideoCard';

const Feed = () => {
  const { loading, searchResults } = useContext(Context)
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, [])
  return (
    <div className=' flex h-[calc(100%-48px)]'>
      <Left_nav />
      <div className='grow w-[calc(100%-300)] h-full overflow-y-auto bg-black'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5'>
          {
            !loading && searchResults &&
            searchResults.map((item) => {
              if (item?.type !== "video") return false;
              return (
                <VideoCard
                  key={item?.video?.videoId}
                  video={item?.video} />
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Feed;