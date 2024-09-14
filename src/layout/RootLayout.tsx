import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [selectedItem, setSelectedItem] = useState("Payments");
  return (
    <div>
      <main>
        <section className="flex">
          <Sidebar setItem={setSelectedItem} />
          <div>
            <Navbar item={selectedItem} />
            <section className="flex flex-1 items-center border rounded-3xl bg-[#E8E8E8]">
              <div className="w-full">
                <Outlet />
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RootLayout;
