'use client';
import { createContext, useEffect, useState } from "react"
export const ThemeContext = createContext();

export default function ThemeWrapper({children}){

    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const Toggletheme = localStorage.getItem('theme');
        return Toggletheme === 'dark';
    });        
    
    function initialThemeHandle(){
        isDarkTheme && document.querySelector("body").classList.add("dark"); 
    }
    
    function toggleThemeHandler() {
        setIsDarkTheme(!isDarkTheme);
        document.querySelector("body").classList.toggle("dark"); 
        localStorage.setItem('theme', isDarkTheme ? 'light' : 'dark');

    }
    
    const globalState = {
        isDarkTheme: true,
        toggleThemeHandler
    }

    useEffect(()=>initialThemeHandle());

    return(
        <ThemeContext.Provider value={globalState}>
            {children}
        </ThemeContext.Provider>
    )

}