import React, { useState } from 'react'
import { Box , Stack , Typography , Card, Button} from '@mui/material'
import { database } from '../utils/firebase-config';
import { Link } from 'react-router-dom';
const Feed = ({User,setPopup,Data , setData}) => {

  return (
    <Box mt="50px" mx="auto" maxWidth="800px" px="20px"
    >
      <Stack direction="row" justifyContent="space-between"
      alignItems="center" 
            >
        <Typography variant='h5' color="#d3e3fd" 
        fontWeight="bold" >All Documents</Typography>
        <Button onClick={()=>{setPopup(true)}} variant='outlined' sx={{borderRadius:"0px", color:"white",
          width:{xs:"100px" , sm:"200px"}
        }}>Start a  document</Button>
      </Stack>
      <Stack mt="40px" direction="column" spacing={3}>
      {Data?.map((value)=>{
        const milliseconds = value.time.seconds * 1000 + value.time.nanoseconds / 1000
        const date = new Date(milliseconds)
        return (
           
              <Box key={value.id} width="95%" color="white" height="60px"
              bgcolor="#162c46" borderRadius="10px"
              sx={{p:{"xs":"10px" , "md":"20px"}}}>
                  <Stack  direction="row" spacing={2} sx={{width:"100%"}}  alignItems="center" justifyContent="space-between">
                                         <Box padding="10px" bgcolor="#9bacc7" borderRadius="20px">
                        <img src="../public/docs.svg"  width={40} height={40}/>
                      </Box>
                      <Link to={`/doc/${value.id}`} style={{textDecoration:"none" , flexGrow:"1"}}>
                      <Stack direction="column" spacing={0.4}>
                        <Typography variant='h6' color="#d3e3fd" >{value.name}</Typography>
                        <Typography variant="body2" color="grey"><span>{date.getFullYear()}</span>/<span>{date.getMonth() + 1}</span>/<span>{date.getDate()}</span></Typography>
                      </Stack>
                      </Link>
                      <Box display="flex" justifyContent="center" p="10px" alignItems="center" sx={{":hover" : {backgroundColor:"#d3e3fd" , borderRadius:"50%"}}}>
                        <img onClick={async ()=>{
                          const Id = value.id
                          // deleting from database
                          await database.collection("userCollect").doc(User.email).collection('docs').doc(Id).delete()
                          // filtering it from data 
                          setData(Data.filter((value)=>{
                            return value.id != Id
                          }))
                        }} src='../public/trash.svg' style={{cursor:"pointer" }} width={25} height={25}></img>
                        </Box>
                    </Stack>
              </Box>
        )
      })}
      </Stack>
    </Box>
  )
}

export default Feed