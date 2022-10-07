import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

function Counter() {

    const [like,setLike] = useState(0);
    const [disLike,setDisLike] = useState(0);
  return <>  
    <Button variant="success" onClick={() => {setLike(like+1)} }>👍 {like}</Button>
    &nbsp;
    <Button variant="danger" onClick={() => {setDisLike(disLike+1)} }>👎 {disLike}</Button>    
  </>
}

export default Counter