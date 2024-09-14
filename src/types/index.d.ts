import { GridColDef } from "@mui/x-data-grid";

declare type CardProp = {
  profit: boolean;
  title: string;
  amount: string;
};

declare type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className: string;
  title: string;
};

declare type TableProps = {
  rows: Object[];
  columns: GridColDef[];
};

declare type SelectedItem = {
  status: "Success" | "Failure";
};
