import clsx from "clsx";
import { ImageProp } from "../types";
import image from "../assets/Vector.png";

const ImageInput = ({ full }: ImageProp) => {
  return (
    <div className="flex mb-2 mx-1">
      <label
        className={clsx(
          "relative flex flex-col items-center bg-[#FAFCFF] justify-center w-full h-[124px] rounded-xl border border-dashed border-[#9CBDDD] cursor-pointer",
          full ? "w-full" : "w-1/2"
        )}
      >
        <input type="file" accept="image/*" className="hidden " />
        {full && (
          <div className="absolute top-2 left-2">
            <button className="text-xs text-white bg-[#075AAA] rounded-2xl px-2 py-1.5 whitespace-nowrap">
              Primary Image
            </button>
          </div>
        )}
        <img
          src={image}
          alt="file input"
          width={24}
          height={21}
          className="mb-2"
        />
        <span className="text-xs text-[#616161] items-center justify-center text-center">
          Drag and Drop file here or Choose file
        </span>
      </label>
    </div>
  );
};

export default ImageInput;
