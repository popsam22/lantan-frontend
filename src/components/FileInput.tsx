import { InputProps } from "../types";
import uploadIcon from "../assets/Cloud_Upload.png";

const FileInput = ({ label, placeholder }: InputProps) => {
  return (
    <div>
      <div className="flex flex-col">
        <label className="text-sm text-[#3D3D3D] font-medium">
          {label}
          <div className="flex w-full justify-between items-center border p-3 rounded-lg mt-2 hover:cursor-pointer">
            <input type="file" className="hidden" />
            <span className="text-[#A3A3A3] text-sm font-light">
              {placeholder ? placeholder : "Click here to upload file"}
            </span>
            <img
              src={uploadIcon}
              alt="upload icon"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default FileInput;
