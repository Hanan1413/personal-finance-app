import React from "react";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex bg-[#F3F3E7] min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-6">
      
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
