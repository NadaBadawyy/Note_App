import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AddNote from "../AddNote";
import { useContext, useState } from "react";
import { MidScreen } from "../../context/mdScreen";

export default function Layout() {
  
  const {mdScreen}=useContext(MidScreen)
  const [nav, setnav] = useState(false)
  function handletoggle(){
    setnav(true)
  }
  return (
    <>
    
      <div className="relative">
        <div className="flex">
          {!mdScreen||nav?(nav?<div className="bg-[#80808098] fixed inset-0" onClick={()=>{setnav(false)
            
          }
           }><Navbar/></div>:<Navbar/>):<><div className="absolute top-0 left-0 m-5 text-xl border-2 w-[40px] h-[40px] rounded-full border-primary flex justify-center items-center bg-back" onClick={handletoggle}><i className="fa-solid fa-bars-staggered"></i></div></>}
          <Outlet />
        </div>
        <AddNote />
      </div>

      <Footer />
    </>
  );
}
