import React, { useEffect, useState } from 'react'
import Header from '../src/component/Header'
import Feed from '../src/component/Feed'
import Register from '../src/component/Register'
import Popup from '../src/component/Popup'
import { database } from '../src/utils/firebase-config'
const Dashboard = ({User}) => {

  const [popup, setPopup] = useState(false)
  const [Data , setData] = useState([]) 
  const [retrieve, setRetrieve] = useState('');
  
  useEffect( () => {
    
    async function FetchDocumnet(){
      if(!User){
        return 
      }
      try {
        const docsCollectionRef = database.collection("userCollect").doc(User.email).collection('docs');
        const querySnapshot = await docsCollectionRef.get();
        const documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        setData(documents);

      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    }
    FetchDocumnet()
  }, [User,retrieve]);
  if(!User) return <Register/>
  
  
  
  
  
  
  
  return (
    <>
        <Header User = {User} setData={setData} Data={Data}/>
        {popup && <Popup
        setRetrieve = {setRetrieve} setData={setData} Popup={popup} setPopup = {setPopup} User = {User}/>}
        <Feed User = {User} setPopup = {setPopup} Data = {Data}  setData = {setData}/>
    </>
  )
}

export default Dashboard