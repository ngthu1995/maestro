import React from "react";
import { useDropzone } from "react-dropzone";

import styles from "./page.module.css";

const Dropzone = ({ onDrop, accept, open, fileUpload }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    onDrop,
  });

  return (
    <div className={styles.container}>
      <div {...getRootProps({ className: styles.dropzone })}>
        <input className={styles.fileInput} {...getInputProps()} />
        <div>
          {isDragActive ? (
            <p className={styles.dropzoneText}>
              Release to drop the files here
            </p>
          ) : (
            <p className={styles.dropzoneText}>
              Drag’ n’ drop some files here, or click to select files
            </p>
          )}

          <button
            type="button"
            className={styles.fileInputLabel}
            onClick={open}
          >
            Click to select files
          </button>
        </div>
      </div>
      <div style={{ paddingTop: 15, textAlign: "center" }}>{fileUpload}</div>
    </div>
  );
};

export default Dropzone;
