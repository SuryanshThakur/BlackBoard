import React, { useState, useEffect } from 'react';
import axios from "axios";
import PdfComp from "./PdfComp";

function AddFile() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);
  
  const getPdf = async () => {
    const result = await axios.get("https://blackboard-backend-rrtn.onrender.com/get-files");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);

    const result = await axios.post(
      "https://blackboard-backend-rrtn.onrender.com/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status === "ok") {
      alert("Uploaded Successfully!!!");
      getPdf();
    }
  };
  
  const showPdf = (pdf) => {
    setPdfFile(`https://blackboard-backend-rrtn.onrender.com/files/${pdf}`)
  };

  return (
    <div className="container mx-auto px-4">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Upload Files</h2>
        <form className="space-y-4" onSubmit={submitImage}>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              id="title"
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700">Upload File</label>
            <input
              id="file"
              type="file"
              className="mt-1 block w-full"
              accept="application/pdf"
              required
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Uploaded PDF:</h2>
        <div className="grid grid-cols-1 gap-4">
          {allImage === null
            ? ""
            : allImage.map((data, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-md font-medium mb-2">Title: {data.title}</h3>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => showPdf(data.pdf)}
                  >
                    Show PDF
                  </button>
                </div>
              ))}
        </div>
      </div>
      <PdfComp pdfFile={pdfFile}/>
    </div>
  );
}

export default AddFile;
