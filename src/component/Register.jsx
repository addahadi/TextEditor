import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Canvas } from './canvas/canvas'

const Register = () => {
  return (
    <Box component="div" sx={{minHeight:"100vh" , display:"flex" , justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        gap:"20px",
        position:"relative"
    }}
    >
       {/* this is a canvas for balls flowting animation */}
        <Canvas/>

        <img src='../public/docs.svg' width={200} height={200}/>
        <Typography variant='h4' color="white">TEXT <span style={{color: "#3371FF"}}>DOCS</span></Typography>
        
        {/*link to signup to register */}
        <Link to="/signin">
            <Button variant='contained' size='medium' sx={{width:"150px"}}>Get Started</Button>
        </Link>
    </Box>
  )
}

export default Register