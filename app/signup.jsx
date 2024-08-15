// src/components/MyForm.js
import React, { useState } from 'react';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { getAuth } from 'firebase/auth';
import { provider } from '../src/utils/firebase-config';
import { generateFirebaseAuthErrorMessage } from '../src/utils/errorhandler';
const SignIn =  ({signin}) => {
  return (
      <Box component="div" display="flex" justifyContent="center"
      alignItems="center" minHeight="100vh"
      >
        <Paper elevation={12}
        
        >
          <Stack
          width="350px" height="350px"
          direction="column" justifyContent="center" alignItems="center"
          bgcolor="#0d2136"
          >
            <img src='../public/docs.svg' width={70} height={70}
            style={{marginBottom:"20px"}}
            ></img>
            <Typography fontWeight="bold" variant='h5' color="#ccc"
            mb="20px"
            >Sign <span style={{color:"#3371FF"}}>In </span>
            With Text Docs
            </Typography>
            <Typography
            mb="50px"
            variant='body1' color="#d3e3fd" fontWeight="bold">Welcome back glad to see you again!</Typography>
            <Button onClick={signin} sx={{marginBottom:"10px",

              width:"200px"
            }}
            variant='contained'>SignIn With Google</Button>
            <Typography
            mb="10px"
            color="#d3e3fd" fontWeight="bold">create google account</Typography>
          </Stack>
        </Paper>

      </Box>
  );
};

export default SignIn;