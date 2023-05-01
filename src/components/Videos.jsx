import React from 'react'

import { Stack ,Box } from '@mui/material';

import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

import { Audio } from  'react-loader-spinner'

const Videos = ({videos}) => {

  return (
    <Stack direction='row' flexWrap='wrap'
    justifyContent='center' gap={2}
    width='100%'
    height ='100%'
    style={{background:'transparent'}}
    >
      {
        videos.map((item ,index)=>(
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))
      }
    </Stack>
  )
}

export default Videos
