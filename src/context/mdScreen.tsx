import { createContext, useEffect, useState } from 'react'
import { propsDataType } from '../lib/Types';
interface mdType{
    mdScreen:boolean,
}
export const MidScreen=createContext<mdType>({
    mdScreen:false,
    
})
export default function MidScreenProvider({children}:propsDataType) {
 const [mdScreen, setmdScreen] = useState(false);
   useEffect(() => {
     window.addEventListener("load", () => {
       if (window.innerWidth <= 778) setmdScreen(true);
       else setmdScreen(false);
     });
     window.addEventListener("resize", () => {
       if (window.innerWidth <= 778) setmdScreen(true);
       else setmdScreen(false);
     });
   }, []);
   return <MidScreen.Provider value={{mdScreen}}>
    {children}
   </MidScreen.Provider>
}
