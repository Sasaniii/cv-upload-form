import React, { useState } from "react";
import axios from "axios";
import UploadButton from "./uploadButton";

function CvForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [file, setFile] = useState('')
    //     state = {
    //         username : "",
    //         useremail : ""
    //     }

  // const onSubmitClick =() => {
  //       axios.post('http://localhost:4000/api/namestest', {
  //        userName : name,
  //        userEmail : email,
  //       } ).then(() => {
  //           alert("successful insert");
  //       });
  //       };

  const SubmitFileData = (e) => { 
    e.preventDefault()
    let formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('file', file, file.name);
     
      axios.post('http://localhost:4000/api/namestest' , formData
      )
  .then(res =>{
    console.log(res);
  })
  .catch(error =>{
    console.log(error);
  })


  }
        
  return(
   <div class="form-container">
      <form class="register-form">
      <input
        id="name"
        className="form-field"
        type="text"
        placeholder="Name"
        name="name"
        onChange={(e) => {setName(e.target.value)
        }}
      />
      <input
        id="email"
        className="form-field"
        type="text"
        placeholder="Email"
        name="email"
        onChange={(e) => {setEmail(e.target.value)
        }}
      />
      <UploadButton setFile={setFile} />

    <div><button className="form-field" onClick={SubmitFileData}>submit</button></div>
    </form>
  </div>
        )
    }

export default CvForm;