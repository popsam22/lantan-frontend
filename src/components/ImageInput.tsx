import clsx from "clsx";
import { ImageProp } from "../types";
import image from "../assets/Vector.png";
import { useEffect, useState } from "react";
import propertyImg from "../assets/Frame 518.png";
import pencil from "../assets/edit-2.svg";

const ImageInput = ({ full, previewImg = false }: ImageProp) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    if (previewImg) {
      setPreviewImage(propertyImg);
    }
  }, [previewImg]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file && file.length > 0) {
      setPreviewImage(URL.createObjectURL(file[0]));
    }
  };
  return (
    <div className="flex mb-2 mx-1">
      <label
        className={clsx(
          "relative flex flex-col items-center bg-[#FAFCFF] justify-center w-full h-[124px] rounded-xl border border-dashed border-[#9CBDDD] cursor-pointer",
          full ? "w-full" : "w-1/2"
        )}
      >
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        {full && (
          <div className="absolute top-2 left-2">
            <button className="text-xs text-white bg-[#075AAA] rounded-2xl px-2 py-1.5 whitespace-nowrap">
              Primary Image
            </button>
          </div>
        )}
        {previewImage ? (
          <img
            src={previewImage}
            alt="image preview"
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <img
            src={image}
            alt="file input"
            width={24}
            height={21}
            className="mb-2"
          />
        )}
        {previewImage ? (
          <span className="text-[#FFFFFF] text-sm absolute flex flex-col items-center">
            <img
              src={pencil}
              alt="edit"
              width={20}
              height={20}
              className="object-contain"
            />
            Replace Image
          </span>
        ) : (
          <span className="text-xs text-[#616161] items-center justify-center text-center">
            Drag and Drop file here or Choose file
          </span>
        )}
      </label>
    </div>
  );
};

export default ImageInput;
