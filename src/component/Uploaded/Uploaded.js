import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./Uploaded.css";
import SideBar from "../Sidebar/SideBar";
import Notification from "../../assets/not.png";
import * as XLSX from "xlsx";

const Uploaded = () => {
  const location = useLocation();
  const [excelData, setExcelData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const file = location.state?.file;

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(worksheet);
        setExcelData(json);
        setLoading(false);
      };
      reader.readAsArrayBuffer(file);
    }
  }, [location.state?.file]);

  return (
    <div className="container">
      <div className='sidebar'>
        <SideBar />
      </div>
      <div className='upload'>
        <div className='head'>
          <h1>Uploaded CSV Data</h1>
          <div className='notification'>
            <img src={Notification} alt='notification' />
          </div>
        </div>
        <div className="tableData">
          <p>Uploads</p>
          {loading ? (
            <div>Loading...</div>
          ) : excelData.length ? (
            <div className='tableCon'>
              <table>
                <thead className='head1'>
                  <tr className='headR'>
                    {Object.keys(excelData[0]).map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className='body1'>
                  {excelData.map((row, index) => (
                    <tr key={index} className='bodyR'>
                      {Object.keys(row).map((key) => (
                        <td key={key}>{row[key]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>No data available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Uploaded;


