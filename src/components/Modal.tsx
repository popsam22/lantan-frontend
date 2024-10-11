import Modal from "@mui/material/Modal";
import Close from "../assets/close.png";
import { ModalProps } from "../types";

const LantanModal = ({
  open,
  onClose,
  children,
  className,
  title,
}: ModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div
        className={`bg-white border-0 rounded-2xl shadow-md flex flex-col outline-none overflow-y-auto max-h-[550px] w-full ${className} mt-[20%] lg:mt-[10%] mx-auto px-6 py-6 max-md:px-8 max-md:py-4 focus:outline-0`}
      >
        <div className="flex justify-between pb-4">
          <p className="text-2xl font-medium mb-5 text-[#1F1F1F]">{title}</p>
          <div onClick={onClose} className="cursor-pointer">
            <img
              src={Close}
              alt="icon"
              style={{ width: "16px", height: "16px" }}
            />
          </div>
        </div>
        {children}
      </div>
    </Modal>
  );
};

export default LantanModal;
