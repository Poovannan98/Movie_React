import React from 'react'
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function CURD() {


  return <>

    <IconButton><EditIcon color="primary"/></IconButton>
    &nbsp;   
    <IconButton><DeleteForeverIcon color="error"/></IconButton>
  
  </>
}

export default CURD