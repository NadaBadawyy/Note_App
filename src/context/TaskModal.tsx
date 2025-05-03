import { createContext, useContext, useState } from 'react'
import { propsDataType } from '../lib/Types'
import { Notes } from './Notes'
interface TaskPropsType{
    showModal:boolean,
   
    handleshowModal:()=>void,
    handlecloseModal:()=>void,
}
export const TaskModal=createContext<TaskPropsType>({
    showModal:false,
    handleshowModal:()=>{},
    handlecloseModal:()=>{},
})
export default function TaskModalProvider({children}:propsDataType) {
  const {setnoteItem}=useContext(Notes)
    const [showModal, setshowModal] = useState(false)
  function handleshowModal(){
    setshowModal(true)
  }
  function handlecloseModal(){
    setshowModal(false)
    setnoteItem(null)
    
  }
    return <TaskModal.Provider value={{showModal,handleshowModal,handlecloseModal}} >
        {children}
    </TaskModal.Provider>
}
