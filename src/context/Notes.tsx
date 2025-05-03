import  { createContext, useEffect, useState } from 'react'
import { note, propsDataType } from '../lib/Types'
import { baseUrl, Proaxios } from '../lib/Api'

interface noteContextType{
    notes:Array<note>,
    noteItem:note|null,
    getNotes:()=>void,
    setnoteItem:(smth:note|null)=>void
    setnotes:(notes:note[])=>void
}
export const Notes=createContext<noteContextType>({
    notes:[],
    getNotes:()=>{},
    noteItem:{title:'',content:'',_id:''},
    setnoteItem:()=>{},
    setnotes:()=>{},


})
export default function NotesProvider({children}:propsDataType) {
    const [notes, setnotes] = useState<note[]>([])
    const [noteItem, setnoteItem] = useState<note|null>(null)

  async function getNotes(){
    await Proaxios.get(`${baseUrl}notes`).then((res)=>{
      setnotes(res.data.notes)

    }).catch((res)=>{console.log(res);
    })
  }
 

  useEffect(()=>{
    getNotes();
  },[])

  return <Notes.Provider value={{notes,getNotes,noteItem,setnoteItem,setnotes}}>
    {children}
  </Notes.Provider>
}
