import show from "../assets/_Button baseshow.png";
import cloud from "../assets/download-cloud-linecloud.png";
import { GridColDef } from "@mui/x-data-grid";

export const investmentColumns: GridColDef[] = [
  {
    field: "dateCreated",
    headerName: "Date Created",
    width: 183,
  },
  {
    field: "propertyInvested",
    headerName: "Property Invested",
    width: 183,
  },
  {
    field: "customer",
    headerName: "Customer",
    width: 183,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 183,
  },
  {
    field: "investmentType",
    headerName: "Investment Type",
    renderCell: (prop) => (
      <button
        style={{
          backgroundColor: "#FAFCFF",
          color: "#075AAA",
          borderRadius: "50%",
          width: "65px",
        }}
      >
        {prop.value}
      </button>
    ),
    width: 183,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 183,
    renderCell: () => (
      <div className="flex gap-1 justify-center items-center">
        <img src={show} alt="show details" className="w-10 h-10" />
        <img src={cloud} alt="cloud" className="w-5 h-5" />
      </div>
    ),
  },
];

export const investmentRow = [
  {
    id: 1,
    dateCreated: "May 1, 2023, 9:00AM",
    propertyInvested: "Bradford Apartment",
    customer: "Owolu Opeyemi",
    amount: "28,000,000.00",
    investmentType: "Property Purchase",
  },
  {
    id: 2,
    dateCreated: "May 1, 2023, 9:00AM",
    propertyInvested: "Fortune Apartment",
    customer: "Azeez Kiki",
    amount: "28,000,000.00",
    investmentType: "Property Purchase",
  },
];
