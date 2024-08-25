import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Upload.css";
import SideBar from "../Sidebar/SideBar";
import Notification from "../../assets/not.png";
import Upload1 from "../../assets/upload.png";
import Xcel from "../../assets/xcel.png";

const Upload = () => {
  const navigate = useNavigate();
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  const handleFile = (e) => {
    let fileTypes = [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv'
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        setExcelFile(selectedFile);
      } else {
        setTypeError("Please select a valid Excel file.");
        setExcelFile(null);
      }
    }
  };

  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (excelFile) {
      navigate('/uploaded', { state: { file: excelFile } });
    }
  };

  return (
    <div className="container">
      <div className='sidebar'>
        <SideBar />
      </div>
      <div className='upload'>
        <div className='head'>
          <h1>Upload CSV</h1>
          <div className='notification'>
            <img src={Notification} alt='notification' />
          </div>
        </div>
        <div className="uploadcontainer">
          <div className="uploadcon">
            <div className="uploadbox">
              <div className='small'>
                <img src={Xcel} alt='xcel' />
                <p>Drop your excel sheet here or 
                <input type="file" style={{ display: 'none' }} onChange={handleFile} id="fileInput" />
                <label htmlFor="fileInput" style={{ color: "rgba(96, 91, 255, 1)" }}> browse</label></p>
              </div>
            </div>
            <div className='uploadbutton'>
              <img src={Upload1} alt='upload' />
              <div onClick={handleFileSubmit}>Upload</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;


