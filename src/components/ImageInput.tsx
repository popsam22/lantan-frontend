const ImageInput = () => {
  return (
    <div className="flex space-x-6">
      {/* {/* <div className="shrink-0">
        <button className="text-xs text-white bg-[#075AAA] rounded-xl w-16">
          Primary Image
        </button>
      </div> */}
      <label className="block">
        <input
          type="file"
          accept="image/*"
          className=" w-full file:mr-4 file:py-2 file:px-4
      file:rounded-xl file:border file:border-dashed
      file:text-sm file:text-[#616161]"
        />
      </label>
    </div>
  );
};

export default ImageInput;
