import { createContext } from "react";

export type titleBarContextType ={
    isActiveDropdown:Object,
    setIsActiveDropdown:any
}


export const titleBarContext = createContext<titleBarContextType>({
    isActiveDropdown:{},
    setIsActiveDropdown:function(){}
});

