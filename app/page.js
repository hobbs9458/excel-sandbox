'use client';

import { useRef } from 'react';

import readXlsxFile from 'read-excel-file';

export default function Home() {
  const inputRef = useRef(null);

  async function handleChange() {
    const rows = await readXlsxFile(inputRef.current.files[0]);

    console.log(rows);
  }

  return (
    <input type='file' id='input' ref={inputRef} onChange={handleChange} />
  );
}
