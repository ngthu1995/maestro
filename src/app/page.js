"use client";
import { useState, useCallback } from "react";
import Papa from "papaparse";

import Dropzone from "./dropZone";
import { lookUpGrid, formatFile } from "./algorithm";

import styles from "./page.module.css";

const Home = () => {
  const [fileUpload, setFileUpload] = useState(null);
  const [connectedShape, setConnectedShape] = useState(0);

  const onFileUpload = (file = {}) => {
    setFileUpload(file.name);
  };

  const getConnectedShape = (result = {}) => {
    const formatedFile = formatFile(result.data || []);
    const shapeNumber = lookUpGrid(formatedFile);

    setConnectedShape(shapeNumber);
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      Papa.parse(file, {
        complete: function (result) {
          onFileUpload(file);
          getConnectedShape(result);
        },
      });
      return file;
    });
  }, []);

  return (
    <main className={styles.main}>
      <h1>Maestro AI Programming Puzzle</h1>
      <div className={styles.description}>
        <p>
          Get started by uploading a text file that contains 0&apos;s and
          1&apos; in a regular N x M sized grid
        </p>
      </div>

      <Dropzone onDrop={onDrop} fileUpload={fileUpload} accept={".txt/*"} />

      <div className={styles.grid}>
        <h2>Number of connected shapes</h2>
        <h2>{connectedShape}</h2>
      </div>

      <div style={{ fontWeight: "bold" }}>
        <a
          href="https://ngthu1995.github.io/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Thu Nguyen(Tina)
        </a>
      </div>
    </main>
  );
};

export default Home;
