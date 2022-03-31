
import React from 'react';
import Axios from 'axios';
import CvForm from './cvForm';
import { useState } from 'react';

const UploadButton = (props) => {
  const { setFile } = props;
  
  const onFileChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files) {
      setFile(e.target.files[0]);
    }
	
  }
  return (
    <div className="App">
      <div>
        <input className="form-field" type="file" name="file_upload" onChange = {onFileChange} />
      </div> 
    </div>
  );
}
export default UploadButton;
