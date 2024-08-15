import { Box , Paper , Stack , Typography} from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState ,useEffect } from 'react'
import { database } from '../src/utils/firebase-config'
import TextEditor from '../src/component/TextEditor'
const Document = ({User}) => {
  const [Name , setName] = useState('')
  const {id} = useParams()
  useEffect( () => {
    async function FetchDocumnet(){

      try {
        const docsCollectionRef = database.collection("userCollect").doc(User.email).collection('docs');
        const querySnapshot = await docsCollectionRef.get();
        const documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        
        for(let i = 0 ; i < documents.length ; i++){
          if(documents[i].id == id){
            setName(documents[i].name)

          }
        }
      }catch (error){
        console.log(error)
      }
    }
    FetchDocumnet()
  }, [User]);

  return (
    <>
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
              <Link to="/">
                <img  src='../public/docs.svg' 
                style={{marginLeft:"10px" , cursor:"pointer"}}
                width={50} height={50}></img>    
              </Link>
                <Typography color="#d3e3fd" sx={{fontSize:{xs:"1rem" , sm:"1.5rem"}}}fontWeight="bold">
                  {Name ? Name : ""}
                </Typography>
            </Stack>
            <img
            loading='lazy'
            src={User?.photoURL ? User.photoURL : '../public/profile.svg'} width={35} height={35} style={{borderRadius:"50%" , cursor:"pointer",
                marginRight:"20px" , border:"4px solid white"
            }} ></img>
        </Stack>
      </Paper>
      <TextEditor User={User}/>
    </>
  )
}

export default Document