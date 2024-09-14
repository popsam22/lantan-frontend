const Navbar = () => {
  return (
    <div>
      <nav className="flex relative top-0 w-full bg-white py-4">
        <div>
          <div className="flex mb-3 gap-2">
            <p className="text-[#A3A3A3]">Dashboard</p>
            {">"}
            <p className="text-[#2E2E2E]">Payments</p>
          </div>
          <div className="text-[#2E2E2E]">Payments</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
