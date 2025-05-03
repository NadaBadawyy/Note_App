import  { useContext } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { TaskModal } from '../../context/TaskModal';
import { Notes } from '../../context/Notes';

export default function Navbar() {
    let {handleshowModal}=useContext(TaskModal)
    let {setnoteItem}=useContext(Notes)
   

  const navigate= useNavigate()
  function handlelogout(){
    localStorage.removeItem('token');
    navigate('/login')
  }
  return (
    <>
    <nav className='w-[300px]  fixed bg-[#A9B5DF] h-screen font' onClick={(e)=>{e.stopPropagation();}}>
      <p className='text-3xl font-bold  py-10 text-center text-[#2D336B] '><i className="fa-solid fa-notes-medical mx-2"> </i>Notes</p>
      <div className="p-5">
      <button className='p-3 rounded-xl w-full bg-[#2D336B] text-white ' onClick={()=>{
        setnoteItem(null)
        handleshowModal()}}><i className="fa-solid fa-plus mx-1 "></i> Add New</button>
      <Link to={'/'}><div className="p-3 mt-10 border border-[#2D336B] rounded-full hover:scale-105 hover:shadow-md  ">
        <p className='text-[#2D336B] text-xl mx-5'><i className="fa-solid fa-house "></i> Home</p>
      </div></Link>
      <div className="p-3 mt-10 border border-[#2D336B] rounded-full  hover:scale-105 hover:shadow-md " onClick={handlelogout}>
        <p className='text-[#2D336B] text-xl mx-5'><i className="fa-solid fa-right-from-bracket"></i> LogOut</p>
      </div>
      </div>
    </nav>
    </>
  )
}
