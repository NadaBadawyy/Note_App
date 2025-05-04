import { createContext, useEffect, useState } from 'react'
import { propsDataType } from '../lib/Types';
interface mdType{
    mdScreen:boolean,
    
}
export const MidScreen=createContext<mdType>({
    mdScreen:false,
    
})
export default function MidScreenProvider({children}:propsDataType) {
 const [mdScreen, setmdScreen] = useState(window.innerWidth <= 778);
   useEffect(() => {
     window.addEventListener('load', () => {
       setmdScreen(window.innerWidth <= 778);
      
     });
     window.addEventListener("resize", () => {
       setmdScreen(window.innerWidth <= 778);
     });
   }, []);
   return <MidScreen.Provider value={{mdScreen}}>
    {children}
   </MidScreen.Provider>
}
