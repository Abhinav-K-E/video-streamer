import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos} from "./";
import { fetchFromAPI } from "../utils/fetchFromApi";

const VideoDetail = () => {

  const [videoDetail , setVideoDetail] = useState(null)
  const [videos , setVideos] = useState([])
  const {id} = useParams();

  useEffect(()=>{
    fetchFromAPI(`videos?part=contentDetails,snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
    
      fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  },[id])
  console.log(videoDetail);
  console.log(id);
  console.log(videos)

  if(!(videoDetail)) return 'Loading'

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;


  return (
    <Box style={{backgroundColor:'transparent' ,overflow:'hidden' , overflowY:'auto'}} height='100vh' p={{md:3 , xs:2}}>
      <Stack direction={{ xs: "column", md: "row" }} mb={4}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer className='react-player' url={`https://www.youtube.com/watch?v=${id}`} controls/>
            <Typography color='#fff' p={2} fontWeight='bold'>
              {title}
            </Typography>

            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>

      <Box backgroundColor='transparent' px={2} py={{md:1,xs:5}}
      justifyContent='center'
      alignItems='center'>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default VideoDetail
