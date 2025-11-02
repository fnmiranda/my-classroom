'use client'
import { createContext, useState, useContext } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onIndexChanged = (index) => {
    setActiveIndex(index);
  }

  return (
    <SidebarContext.Provider value={{ activeIndex, onIndexChanged }} >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  return useContext(SidebarContext);
}
