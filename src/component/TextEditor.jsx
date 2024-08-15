import React, { useEffect, useState } from 'react'

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from 'draft-js';
import { database } from '../utils/firebase-config';
import { useParams } from 'react-router-dom';
import { convertToRaw , convertFromRaw } from 'draft-js';
const TextEditor = ({User}) => {

    const {id} = useParams()
    const [Editorst , setEditorst] = useState(EditorState.createEmpty())
    function handlechange(editorState){
        setEditorst(editorState)
        database.collection("userCollect").doc(User.email).collection('docs').doc(id).set({
            editorState:convertToRaw(editorState.getCurrentContent())
        },{
            merge:true
        })
    }
    let querySnapshot
    useEffect(()=>{
        async function fetchDoc(){
            querySnapshot =  await database.collection("userCollect").doc(User?.email).collection('docs').doc(id).get()
            setEditorst(EditorState.createWithContent(convertFromRaw(querySnapshot?.data()?.editorState)))
        }
        fetchDoc()
    },[User , querySnapshot])
  return (
    <Editor
        editorState={Editorst}
        onEditorStateChange={handlechange}
        toolbarStyle={{display:"flex" , justifyContent:"center", 
            backgroundColor:"#0d2136",
            borderTop:"2px solId #d3e1d3",
            borderRight:"none",
            borderLeft:"none",
        }}
        editorStyle={{marginTop:"20px",backgroundColor:"#d3e1d3" , maxWidth:"1000px", margin:"30px auto",padding:"20px"}}
        
    />
  )
}

export default TextEditor