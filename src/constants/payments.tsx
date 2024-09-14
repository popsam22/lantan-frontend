import show from "../assets/_Button baseshow.png";
import cloud from "../assets/download-cloud-linecloud.png";
import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "dateCreated",
    headerName: "Date Created",
    width: 183,
  },
  {
    field: "transactionId",
    headerName: "Transaction ID",
    width: 231,
  },
  {
    field: "customer",
    headerName: "Customer",
    width: 150,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    renderCell: (prop) => (
      <button
        style={{
          backgroundColor: prop.value === "Success" ? "#ECFDF3" : "#FEF3F2",
          color: prop.value === "Success" ? "#027A48" : "#B42318",
          borderRadius: "50%",
          width: "65px",
        }}
      >
        {prop.value}
      </button>
    ),
    width: 160,
  },
  {
    field: "actions",
    headerName: "Actions",
    renderCell: () => (
      <div className="flex gap-1 justify-center items-center">
        <img src={show} alt="show details" className="w-10 h-10" />
        <img src={cloud} alt="cloud" className="w-5 h-5" />
      </div>
    ),
    width: 116,
  },
];

export const rows = [
  {
    id: 1,
    dateCreated: "May 1, 2023, 9:00AM",
    transactionId: "7GJ17321HASD...1313",
    customer: "Owolu Opeyemi",
    amount: "800.00",
    status: "Success",
  },
  {
    id: 2,
    dateCreated: "May 1, 2023, 9:00AM",
    transactionId: "7GJ17321HASD...1313",
    customer: "Victor Tosin",
    amount: "00.00",
    status: "Error",
  },
  {
    id: 3,
    dateCreated: "May 1, 2023, 9:00AM",
    transactionId: "7GJ17321HASD...1313",
    customer: "Azeez Kiki",
    amount: "500,000.00",
    status: "Success",
  },
  {
    id: 4,
    dateCreated: "May 1, 2023, 9:00AM",
    transactionId: "7GJ17321HASD...1313",
    customer: "Emmanuel Kiki",
    amount: "2,000,000.00",
    status: "Success",
  },
  {
    id: 5,
    dateCreated: "May 1, 2023, 9:00AM",
    transactionId: "7GJ17321HASD...1313",
    customer: "Azeez Kiki",
    amount: "200,000.00",
    status: "Success",
  },
  {
    id: 6,
    dateCreated: "May 1, 2023, 9:00AM",
    transactionId: "7GJ17321HASD...1313",
    customer: "Azeez Kiki",
    amount: "500,000.00",
    status: "Success",
  },
  {
    id: 7,
    dateCreated: "May 1, 2023, 9:00AM",
    transactionId: "7GJ17321HASD...1313",
    customer: "Azeez Kiki",
    amount: "200,000.00",
    status: "Success",
  },
  {
    id: 8,
    dateCreated: "May 1, 2023, 9:00AM",
    transactionId: "7GJ17321HASD...1313",
    customer: "Azeez Kiki",
    amount: "00.00",
    status: "Success",
  },
  {
    id: 9,
    dateCreated: "May 1, 2023, 9:00AM",
    transactionId: "7GJ17321HASD...1313",
    customer: "Azeez Kiki",
    amount: "800",
    status: "Success",
  },
  {
    id: 10,
    dateCreated: "May 1, 2023, 9:00AM",
    transactionId: "7GJ17321HASD...1313",
    customer: "Azeez Kiki",
    amount: "50,000.70",
    status: "Success",
  },
  {
    id: 11,
    dateCreated: "May 1, 2023, 9:00AM",
    transactionId: "7GJ17321HASD...1313",
    customer: "Azeez Kiki",
    amount: "800,000.00",
    status: "Failed",
  },
  {
    id: 12,
    dateCreated: "May 1, 2023, 9:00AM",
    transactionId: "7GJ17321HASD...1313",
    customer: "Azeez Kiki",
    amount: "00.00",
    status: "Failed",
  },
  {
    id: 13,
    dateCreated: "May 1, 2023, 9:00AM",
    transactionId: "7GJ17321HASD...1313",
    customer: "Azeez Kiki",
    amount: "520,000.00",
    status: "Success",
  },
];
