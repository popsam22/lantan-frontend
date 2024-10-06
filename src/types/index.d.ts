import { GridColDef } from "@mui/x-data-grid";

declare type CardProp = {
  profit?: boolean;
  title: string;
  amount: string;
  icon?: string;
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
  height: number;
};

declare type SelectedItem = {
  status: "Success" | "Failure";
};

declare type NavbarProp = {
  item: string;
};

declare type SidebarProp = {
  setItem: (value: string) => void;
  select: string;
};

declare type InputProps = {
  label: string;
  placeholder?: string;
  bottomText?: string;
};

declare type CheckboxInputProps = {
  label: string;
  onChange?: (selected: ChangeEventHandler<HTMLInputElement>) => void;
};

declare type ButtonProps = {
  label: string;
  bgColor?: boolean;
};

declare type ImageProp = {
  full?: boolean;
};

declare type InputFieldProp = {
  imageSrc: string;
  label: string;
  placeholder: string;
  type: string;
};

declare type ButtonChildProp = {
  children: string;
};

declare type ConfirmationPageProps = {
  heading: string;
  placeholder: string;
  buttonText: string;
  // navigateTo?: string;
};

declare type TaskCardProps = {
  title: string;
  subTitle: string;
  button?: boolean;
};

declare type TopInvestorsProps = {
  amount: string;
  name: string;
  title: string;
  slots: string;
  imgUrl: string;
};
