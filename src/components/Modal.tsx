import Modal from "@mui/material/Modal";
import Close from "../assets/close.png";
import { ModalProps } from "../types";

const LatanaModal = ({
  open,
  onClose,
  children,
  className,
  title,
}: ModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div
        className={`bg-white border-0 rounded-2xl shadow-md flex flex-col outline-none overflow-y-auto max-h-[550px] max-w-[90%] ${className} mt-[20%] lg:mt-[10%] mx-auto md:w-[70%] lg:w-[45%] px-6 py-6 max-md:px-8 max-md:py-4  focus:outline-0`}
      >
        <div className="flex justify-between pb-4">
          <p className="text-[24px] font-medium mb-5">{title}</p>
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

export default LatanaModal;
