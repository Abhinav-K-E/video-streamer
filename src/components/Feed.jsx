import React from 'react'

import { useState , useEffect } from 'react'

import {Box , Stack , Typography} from '@mui/material'

import SideBar from './SideBar'
import Videos from './Videos'

import  {fetchFromAPI}  from '../utils/fetchFromApi';

const Feed = () => {

  const [selected , setSelected] = useState('New');
  const [videos , setVideos] = useState([]);

  useEffect(() =>{
    fetchFromAPI(`search?part=snippet&q=${selected}`)
    .then((data) => setVideos(data.items))
  },[selected])
  
  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
      <Box
      sx={{height:{sx:'auto',md:'92vh'} , borderRight:'1px solid #3d3d3d' ,
    px:{sx:0 ,md:2}}}
      >
        <SideBar selected={selected} setSelected={setSelected} />
      </Box>
      <Box p={3} sx={{overflowY:'auto' ,
      height:'90vh' , flex:2}}>
        <Typography varient='h4'
        color='#fff'
        fontWeight='500'
        fontSize='20px'
        mb='30px'>
        {selected}<span style={{color:'hsl(198, 81%, 46%)' , marginLeft :'4px'}}>videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed
