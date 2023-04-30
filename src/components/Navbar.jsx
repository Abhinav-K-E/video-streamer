import React from 'react'

import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import {logo} from '../utils/constants'
import SeachBar from './SeachBar'

const Navbar = () => {
  return (
    <Stack direction='row' alignItems='center' p={2} style={{zIndex:'20'}}
    sx={{ background:'transperent' , justifyContent:'flex-start'}}>
      <Link to='/' style={{display:'flex' ,alignItems:'center'}}>
        <Typography mr={3} color='#fff' fontSize={20}>
          .Vid
        </Typography>
      </Link>
      <SeachBar />
    </Stack>
  )
}

export default Navbar
