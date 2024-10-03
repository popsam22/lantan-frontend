import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [selectedItem, setSelectedItem] = useState("Overview");
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-1">
        <Sidebar setItem={setSelectedItem} />
        <div className="flex flex-col flex-1">
          <Navbar item={selectedItem} />
          <section className="flex-1 rounded-3xl bg-[#E8E8E8] m-4">
            <div className="w-full">
              <Outlet />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
