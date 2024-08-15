import React, { useEffect, useState } from 'react'
import { Box , Stack, Typography ,TextField, Paper, Autocomplete} from '@mui/material'
import { auth } from '../utils/firebase-config'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const style= {
    '& .MuiInputBase-input': {
        color: 'white', // Change the text color
      },
      '& .MuiInputLabel-root': {
        color: 'white', // Change the label color
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white', // Change the outline color
        },
        '&:hover fieldset': {
          borderColor: 'white', // Change the outline color on hover
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white', // Change the outline color when focused
        },
   color:"white"}
}


const Header = ({User , setData , Data}) => {
  const [searchedData , setSearchData] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    setSearchData(Data.map((value)=>{
      return value.name
    }))
  },[User , Data])
  async function handleSignout(){
    await signOut(auth).then(()=>{
      navigate("/")
    })
  }
  return(
    <Paper  sx={{height:"50px",padding:"10px" ,
        position:"sticky",backgroundColor:"#0d2136" , top:"0" , left:"0",
        zIndex:"100"
    }}
    >
        <Stack direction="row" alignItems="center"
        justifyContent="space-between" 
        >
            <Stack spacing={{xs:1 , sm:2}} direction='row'
            alignItems="center"
            >
                <img  src='../public/docs.svg' 
                style={{marginLeft:"10px"}}
                width={50} height={50}></img>    
                <Typography color="#d3e3fd" sx={{fontSize:{xs:"1rem" , sm:"1.5rem"}}}fontWeight="bold">
                    TEXT <span style={{color:"#3371FF"}}>DOCS</span>
                </Typography>
            </Stack>
            <Autocomplete         
              disablePortal
              id="combo-box-demo"
              options={searchedData}
              sx={{width:{lg:"60%" , md:"70%" , xs:"50%"}}}
              renderInput={(params) =>{
                return <TextField {...params} sx={style}  label="Search" variant="outlined" size='small'/>}}
            />
            <Box 
            onClick = {handleSignout}
            sx={{mr:{"xs":"10px" , "sm":"20px"} , ml:{"xs":"10px" ,sm:"0px"}}}>
              <img
              
              loading='lazy'
              src={User.photoURL ? User.photoURL : '../public/profile.svg'} width={35} height={35} style={{borderRadius:"50%" , cursor:"pointer",
                border:"4px solid white"
              }} ></img>
            </Box>
        </Stack>
    </Paper>
  )
  
}

export default Header