import React from 'react'

import { Stack } from '@mui/material'

import {categories} from '../utils/constants'

const SideBar = ({selected , setSelected}) => {

  return (
    <Stack direction='row'
    sx={{
        overflow:'auto',
        height:{sx:'auto' , md:'95%'},
        flexDirection:{md:'column'}
    }}
    >
      {
        categories.map((category)=>(
            <button
            className='category-btn'
            style={{
                background: category.name === selected && 'rgba(0,0,0,0.4)' ,
                color:'#fff'
            }}
            
            key={category.name}
            
            onClick={()=> setSelected(category.name)}
            >
                <span style={{color:category.name === selected ? 'hsl(198, 81%, 46%)' :'white' ,marginRight:'10px'}}>
                    {category.icon}
                </span>
                <span style={{opacity: category.name === selected? 0.5 : 1 , fontWeight:'300'}}>
                    {category.name}
                </span>
            </button>
        ))
      }
    </Stack>
  )
}

export default SideBar
