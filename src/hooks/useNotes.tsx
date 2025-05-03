import  { useContext, useState } from 'react'
import { baseUrl, Proaxios } from '../lib/Api';
import { toast } from 'react-toastify';
import { Notes } from '../context/Notes';

export default function useNotes() {
    const [delLoading, setdelLoading] = useState(false)
    let {getNotes}=useContext(Notes)
    async function deleteNote(id:string){
      
        setdelLoading(true)
         
         await Proaxios.delete(`${baseUrl}notes/${id}`).then(()=>{
             
             setdelLoading(false)
             toast.success('item deleted successfully')
             getNotes();
     
         }).catch((res)=>{
            setdelLoading(false)
            console.log(res);
         })
       }
  return {deleteNote,delLoading}
}
