import React, { useEffect, useState } from 'react'
import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material';
import { database } from '../utils/firebase-config';
import { serverTimestamp, setIndexConfiguration } from 'firebase/firestore';
 // style for the model 
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor:'#162c46',
  boxShadow: 24,
  p: '20px',
  borderRadius:"15px"
};


const Popup = ({setRetrieve,setData,Popup,setPopup, User}) => {
  const [Input, setInput] = useState('');
  const [Desc, setDesc] = useState('');

  function handlecancel() {
    setPopup(false);
  }
  
  const createDocument = async () => {
    if (!Input || !Desc) {
      return;
    }

    try {
      const docRef = await database.collection("userCollect").doc(User.email).collection('docs').add({
        name: Input,
        time: serverTimestamp(),
        disc: Desc || " "
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    setInput('');
    setDesc('');
    setPopup(false);
    setRetrieve(Input);
  };
  return (
    <Modal
    open = {Popup}

    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <Typography fontWeight="bold" mb='20px' variant="h6" color="#d3e3fd">
                New Document
            </Typography>
           
           <label style={{color:"#d3e3fd"}}>title:</label>
           
           <input onChange={(e)=>{setInput(e.target.value)}}  value ={Input} type='search' 
           style={{
            width:"100%",
            height:"40px",
            outline:"none",
            backgroundColor:"#d3e3fd",
            marginBottom:"25px",
            border:"none",
            paddingLeft:"10px",
            marginTop:"5px"

           }} 
           placeholder='Enter the name of document ...'/>
           
           <label style={{color:"#d3e3fd",}}>Description:</label>
           
           <div 
            contentEditable 
            onBlur={(e) => setDesc(e.target.innerText)}
            suppressContentEditableWarning={true}
            style={{
              width:"97.5%",
              height:"100px",
              outline:"none",
              backgroundColor:"#d3e3fd",
              color:"black",
              marginBottom:"25px",
              paddingLeft:"10px",
              textAlign:"left",
              marginTop:"5px"
            }} 
           >  
            {Desc || ""}
           </div>
           
            <Stack direction='row' spacing={2} justifyContent="flex-end">
                <Button onClick={createDocument} variant='contained' size='small'>save</Button>
                <Button  sx={{color:"white"}} onClick={handlecancel} variant='outlined' size='small'>cancel</Button>
            </Stack>
        </Box>
    </Modal>
  )
}

export default Popup