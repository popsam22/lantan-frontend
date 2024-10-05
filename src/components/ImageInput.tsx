const ImageInput = () => {
  return (
    <div className="flex space-x-6">
      {/* <div className="shrink-0">
        <button className="text-xs text-white bg-[#075AAA] rounded-xl w-16">
          Primary Image
        </button>
      </div> */}
      <label className="block">
        <input
          type="file"
          accept="image/*"
          className="block border-dotted  w-full file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
        />
      </label>
    </div>
  );
};

export default ImageInput;
