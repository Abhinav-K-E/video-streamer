import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import Search from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper component='form'
    className='paper'
    onSubmit={onhandleSubmit}
    sx={{borderRadius:5 ,border:'1px solid #e3e3e3',
    pl:2,
    background:'rgba(255,255,255,.3)',
    mr:{sm:5}}}
    >
        <input type="text" className='search-bar'
        placeholder='seacrh...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        width='100%'
        height='100%'
        style={{background:'transparent' , color:'#000'}}
        />
        <IconButton type='submit' sx={{
            p:'10px' ,color:'rgba(0,0,0,0.7)'
        }}>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar
