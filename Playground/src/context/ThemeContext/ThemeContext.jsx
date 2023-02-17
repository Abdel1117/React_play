import { createContext, useContext } from "react";

const themeContext = createContext("light");


<themeContext.Provider value={children}>
    {children}    
</themeContext.Provider>