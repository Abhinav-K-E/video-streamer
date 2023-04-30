import React from 'react'

import { Link } from 'react-router-dom'

import { Typography , Card , CardContent , CardMedia } from '@mui/material'

import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl , demoChannelUrl ,demoChannelTitle , demoVideoTitle ,demoVideoUrl} from '../utils/constants'

const VideoCard = ({video :{
    id :{videoId} ,snippet 
}}) => {
  return (
    <Card className='card' sx={{width:{md:'340px' , xs:'260px'}}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
        <CardMedia image={snippet?.thumbnails?.high?.url} 
        alt={snippet?.title}
        sx={{width :358 , height:180}}/>
        <CardContent sx={{backgroundColor:'#1e1e1e' ,height:'100px'}} >
            <Link to={videoId ? `/video/${videoId}}` : demoVideoUrl }>
                <Typography
                variant='subtitle1'
                fontWeight='bold'
                color='#fff'
                >
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}}` : demoVideoUrl }>
                <Typography
                variant='subtitle2'
                fontWeight='500'
                color='grey'
                >
                    {snippet?.channelTitle?.slice(0,60) || demoChannelTitle.slice(0,60)}
                    <CheckCircle sx={{fontSize:12, color:'grey' ,ml:'5px'}}/>
                </Typography>
            </Link>
        </CardContent>
      </Link>
    </Card>
  )
}

export default VideoCard
