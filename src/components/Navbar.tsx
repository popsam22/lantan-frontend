const Navbar = () => {
  return (
    <div>
      <nav className="flex relative w-full items-center bg-white border-b md:ml-64 pl-6  pr-10 py-4">
        <div>
          <div className="flex mb-3">
            <p className="text-[#A3A3A3] pr-3">Dashboard</p>
            <p className="text-[#2E2E2E]">Payments</p>
          </div>
          <div className="text-[#2E2E2E]">Payments</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
