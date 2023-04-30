import React from 'react'

import { useState , useEffect } from 'react'

import {Box , Stack , Typography} from '@mui/material'


import Videos from './Videos'

import  {fetchFromAPI}  from '../utils/fetchFromApi';

import { useParams } from 'react-router-dom'

const SearchFeed = () => {

  const [selected , setSelected] = useState('New');
  const [videos , setVideos] = useState([]);

  const {searchTerm} = useParams();

  useEffect(() =>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
    console.log(searchTerm)
  },[searchTerm])
  

  return (
    <Box p={3} sx={{overflowY:'auto' ,
    height:'90vh' , flex:2}}>
      <Typography varient='h4'
      color='#fff'
      fontWeight='500'
      fontSize='20px'
      mb='30px'>
      Seach result for : <span style={{color:'hsl(198, 81%, 46%)' , marginLeft :'4px'}}>{searchTerm}</span>
      </Typography>

      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed

