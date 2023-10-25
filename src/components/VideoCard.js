import React from 'react'
import {abbreviateNumber} from "js-abbreviation-number";
import { Link } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';

import Video_length from '../shared/Video_length';

const VideoCard = ({video}) => {
  return (
    <Link to={`/video/${video.videoId}`}>
    <div className='flex flex-col mb-8 '>
     <div className='relative h-48 md:h-40 md:rounded-xl overflow-hidden'>
      <img  className ='h-full w-full object-cover'
      src={video?.thumbnails?.[0]?.url}></img>
      {video?.lengthSeconds &&
      <Video_length time={video?.lengthSeconds} />}
     </div>
     <div className='flex text-white mt-3'>
      <div className='flex items-start'>
        <div className='flex h-9 w-9 rounded-full overflow-hidden'>
          <img className='h-full w-full object-cover' src={video?.author?.avatar[0]?.url}></img>

        </div>

      </div>
      <div className='flex flex-col ml-3 overflow-hidden'>
         <span className='text-sm font-bold line-clamp-2  dark:text-white'>{video?.title}</span>
         <span className='text-[12px] font-semibold text-white/[0.7] flex item cennter'>
          {video?.author?.title}
          {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" &&(
          <VerifiedIcon className="text-white/[0.5] text-[12px] ml-1" />)}
          </span>
          <div className='felx text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden'>
           <span>{`${abbreviateNumber(video?.stats?.views,2)} views`}</span>
           <span className='flex text-[24px] leading-none font-bold text-white/[0.1] relative top[-10px] mx-1'>
            .
           </span>
           <span className='truncate'>{video?.publishedTimeNext}</span>
          </div>
      </div>

     </div>
    </div>
    </Link>
  )
}

export default VideoCard;