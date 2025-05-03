import { useContext, useEffect, useState} from "react";
import {  Notes } from "../context/Notes";
import useNotes from "../hooks/useNotes";
import Loading from "../components/Loading";
import { TaskModal } from "../context/TaskModal";
import { note } from "../lib/Types";

export default function Home() {
  const { notes} = useContext(Notes);
  const [searchednotes, setsearchednotes] = useState<note[]>([])
  const {handleshowModal}=useContext(TaskModal)
  const [delId, setdelId] = useState('')
  const { deleteNote, delLoading } = useNotes();
  const {setnoteItem}=useContext(Notes)
  function handleSearch(val:string){
   setsearchednotes(notes.filter((note)=>note.title.includes(val)));
  }
  useEffect(()=>{
    setsearchednotes(notes)
  },[notes])
  
  return (
    <>
      <div className="md:ms-[300px] w-full mt-10 md:mt-2 min-h-screen">
        <div className="p-3 rounded-3xl m-10 bg-back flex justify-between items-center  ">
          <i className="fa-solid fa-magnifying-glass mx-2 "> </i>
          <input
            type="text"
            className="bg-transparent border-transparent font-sans  focus:outline-none  border-0 text-black w-full"
            onInput={(e)=>{
              console.log((e.target as HTMLInputElement).value);   
              handleSearch((e.target as HTMLInputElement).value);
                         
            }}
          />
        </div>
        {notes?.length?<>{searchednotes?.map(
          (item: note, i) => {
            return (
              
               
                <div
                  key={i}
                  className="notes mx-10  p-5  border-b border-primary flex flex-col md:flex-row justify-between items-center"
                >
                  <div className="">
                    <p className="capitalize text-2xl md:text-left text-center  font-mono ">
                      {item.title}
                    </p>
                    <p className="text-gray-500">{item.content}</p>
                  </div>

                  <div className="mt-4 md:mt-0">
                    <button className=" bg-navtext  text-white p-3 rounded-xl mx-3" onClick={()=>{
                      setnoteItem(item)              
                      handleshowModal()
                    }}>
                      <i className="fa-solid fa-pen-to-square"></i> Update
                    </button>
                    <button
                      className=" bg-red-500  text-white p-3 rounded-xl"
                      onClick={() =>{deleteNote(item._id); setdelId(item._id)} }
                    >
                      {delLoading&&delId==item._id?<Loading/>:<><i className="fa-solid fa-trash-can"></i> Delete</>}
                      
                    </button>
                  </div>
                </div>
              
            );
          }
        )}</>:<div className="p-4 mx-3 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
  <span className="text-3xl"><i className="fa-solid fa-triangle-exclamation"></i> No notes added yet</span> 
</div>}
        
      </div>
    </>
  );
}
