"use client"

import DropzoneComponent from "react-dropzone"

function FileDropArea() {
  const maxSize = 777777;

  return (
    <DropzoneComponent onDrop={(acceptedFiles) => console.log(acceptedFiles)} maxSize={maxSize}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject, fileRejections }) => {
        const isFileTooLarge = fileRejections.some((rejection) =>
          rejection.errors.some((e) => e.code === "file-too-large")
        );
        return (
          <div
            {...getRootProps()}
            className={`
              border-2 border-dashed rounded-lg p-6 transition-colors
              ${isDragActive ? "border-green-600 bg-green-700" : "border-green-800 bg-green-900"}
              ${isDragReject ? "border-red-600 bg-red-700" : ""}
            `}
          >
            <input {...getInputProps()} />
            <section className="text-center font-mono text-white">
              {isDragActive ? (
                <p className="text-green-200 font-semibold">yes good</p>
              ) : (
                <p className="text-green-100 font-semibold">files go here</p>
              )}
              {isDragReject && <p className="text-red-300 mt-2">rejected</p>}
              {isFileTooLarge && <p className="text-red-300 mt-2">sry max file size is {maxSize}</p>}
              {fileRejections.length > 0 && (
                <div className="mt-4">
                  <p className="text-red-400 font-semibold">rejected files:</p>
                  <ul className="list-disc list-inside mt-2">
                    {fileRejections.map(({ file, errors }) => (
                      <li key={file.path} className="text-green-100">
                        {file.path} - {file.size} bytes
                        <ul className="ml-4 text-red-400">
                          {errors.map((e) => (
                            <li key={e.code}>{e.message}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          </div>
        );
      }}
    </DropzoneComponent>
  );
}

export default FileDropArea;