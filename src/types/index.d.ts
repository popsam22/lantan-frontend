import { GridColDef } from "@mui/x-data-grid";
import React from "react";

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

declare type Property = {
  id: number;
  dateAdded: string;
  propertyName: string;
  address: string;
  unitsLeft: string;
  propertyType: string;
  status: string;
  actions?: React.ReactNode;
};

declare type Payment = {
  dateCreated: string;
  transactionId: string;
  customer: string;
  amount: number;
  status: string;
  check: string;
  actions?: React.ReactNode;
};

declare type Investment = {
  dateCreated: string;
  propertyInvested: string;
  customer: string;
  amount: string;
  investmentType: string;
  check: string;
  actions?: React.ReactNode;
};
declare type Reviews = {
  id: number;
  created: string;
  description: string;
  from: string;
  status: string;
  actions?: React.ReactNode;
};

declare type Customer = {
  id: number;
  dateJoined: string;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  verificationStatus: string;
  walletBalance: string;
  actions?: React.ReactNode;
};

declare type CustomerTransactionHistory = {
  id: number;
  dateCreated: string;
  transactionID: string;
  transactionType: string;
  amount: string;
  status: string;
  check: string;
  actions?: React.ReactNode;
};

declare type SelectedItem = {
  status?: string;
  investmentType?: string;
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
  value?: string;
};

declare type CheckboxInputProps = {
  label: string;
  checked?: boolean;
  onChange?: (selected: ChangeEventHandler<HTMLInputElement>) => void;
};

declare type ButtonProps = {
  label: string;
  bgColor?: boolean;
};

declare type ImageProp = {
  full?: boolean;
  editProperty?: boolean;
  previewImg?: boolean;
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

declare type CustomButtonProps = {
  label: string;
  bgColor: string;
  textColor?: string;
  onClick?: () => void;
};

declare type ColumnFilter = {
  id: string;
  value: string;
};
