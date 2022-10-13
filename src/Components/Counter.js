import React, { useState } from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


function Counter() {

    const [like,setLike] = useState(0);
    const [disLike,setDisLike] = useState(0);
  return <>
   <Badge badgeContent={like} color="primary">  
    <IconButton  onClick={() => {setLike(like+1)} }><ThumbUpOffAltIcon color="primary"/></IconButton></Badge>
    &nbsp;
    <Badge badgeContent={disLike} color="error">
    <IconButton  onClick={() => {setDisLike(disLike+1)} }><ThumbDownOffAltIcon color="error"/></IconButton></Badge> 
    
  </>
}

export default Counter