import React, { useState } from 'react'


function Counter() {

    const [like,setLike] = useState('0');
    const [disLike,setDisLike] = useState('0');
  return <>  
    <button onClick={() => {setLike(like+1)} }>👍 {like}</button>
    &npsb;
    <button onClick={() => {setDisLike(disLike+1)} }>👎 {disLike}</button>
  </>
}

export default Counter