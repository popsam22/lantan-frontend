import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <main>
        <section>
          <Navbar />
          <div className="flex">
            <Sidebar />
            <section className="flex h-[100vh] flex-1 items-center border rounded-3xl bg-[#E8E8E8]">
              <div className="w-full border ">
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
