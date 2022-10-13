import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './color.css';


function ColorGame() {

    const [color,setColor] = useState("");
    const styles={
        background:color,
    };

const [colorList, setcolorList] = useState(["Red","blue","orange","green"]);
  return <>
  
    <div className="color">        
            <TextField
                variant="outlined"
                label="Color"
                style={styles}
                onChange={(e) => setColor(e.target.value)}
            />
            <Button
            variant="contained"
            onClick={() => setcolorList([...colorList,color])}>AddColor</Button>      
        {colorList.map((clr) => (<ColorBox color={clr} />))}
    </div>      
    
  </>
}

function ColorBox({color}){
    const styles={
        height: "25px",
        width: "250px",
        background: color,
        // marginTop: "10px",
    };
    return <>
    <div  style={styles}></div>
    </>
}

export default ColorGame