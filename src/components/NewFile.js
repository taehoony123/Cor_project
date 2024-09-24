import React, { useState } from 'react';
import './NewFile.css'; // 필요하다면 스타일 파일 추가

function NewFile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [draggedFile, setDraggedFile] = useState(null);

  // 파일 선택 핸들러
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // 드래그 앤 드롭 핸들러
  const handleDrop = (event) => {
    event.preventDefault();
    setDraggedFile(event.dataTransfer.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="upload-container">
      {/* 파일 선택 업로드 */}
      <div className="upload-picker">
        <h2>Upload via File Picker</h2>
        <input type="file" accept="video/*" onChange={handleFileSelect} />
        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      </div>

      {/* 드래그 앤 드롭 업로드 */}
      <div
        className="drag-drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p>Drag & Drop Video Here</p>
        {draggedFile && <p>Dragged file: {draggedFile.name}</p>}
      </div>
    </div>
  );
}

export default NewFile;
