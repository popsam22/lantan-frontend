import search from "../../../assets/Search_Magnifying_Glasssearch.png";
const PropertiesList = () => {
  return (
    <div className="p-3">
      <div className="bg-[#FCFCFD] p-3 h-screen rounded-lg">
        <div className="flex justify-between">
          <div className="flex">
            <h1 className="text-[#1F1F1F] text-lg">Properties</h1>
            <p>100 properties</p>
          </div>
          <div className="flex ">
            <img
              src={search}
              alt="search"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-sm text-[#A3A3A3] whitespace-nowrap">
              Search by property name ......
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesList;
