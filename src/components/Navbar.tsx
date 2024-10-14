import { NavbarProp } from "../types";

const Navbar = ({ item }: NavbarProp) => {
  return (
    <div>
      <nav className="flex relative top-0 w-full bg-white py-4 justify-between items-center">
        <div>
          <div className="flex  mb-3 gap-2">
            <p className="text-[#A3A3A3]">Dashboard</p>
            {">"}
            <p className="text-[#2E2E2E]">{item}</p>
          </div>
          <div className="text-[#2E2E2E]">{item}</div>
        </div>
        <div className="flex p-4 divide-x gap-3">
          <p className="bg-[#F1F6FE] p-3 rounded-full text-sm text-[#075AAA]">
            OO
          </p>
          <div className="flex flex-col pl-3 items-start">
            <p className="text-[#2E2E2E] text-sm">Owolu Opeyemi</p>
            <p className="text-[#7A7A7A] text-sm">Super Admin</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
