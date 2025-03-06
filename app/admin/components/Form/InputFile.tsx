import { useState } from "react";

export default function InputFile() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <label className="relative cursor-pointer bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
        Pilih File
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {fileName && (
        <p className="mt-3 text-gray-700 text-sm">
          File dipilih: <span className="font-medium">{fileName}</span>
        </p>
      )}
    </div>
  );
}
