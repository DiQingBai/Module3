import { CButton, CCol, CInput, CLabel, CRow, CSelect } from "@coreui/react";
import React, { useState } from "react";

const NewMenu=()=>{

const [name,setName]=useState("");
const [phone,setphoneNumber]=useState("");
const [email,setemailAddress]=useState("");
const [DOB,setdateofBirth]=useState("");
const [jSkill,setSelectJSkill]=useState("");
const [eSkill,setSelectESkill]=useState("");

const [japanSkill,setJapanSkill]=useState([
   {id:"1", level:"N5" },
   {id:"2", level:"N4" },
   {id:"3", level:"N3" },
   {id:"4", level:"N2" },
   {id:"5", level:"N1" }, //object
]); //variable

const [englishSkill,setEnglishSkill]=useState([
   {id:"1", level:"Beginner" },
   {id:"2", level:"Intermidate" },
   {id:"3", level:"Advance" },//object
]); //variable

const nameChange =(e)=>{ //function
 setName(e.target.value);
};

const phoneNumber =(e)=>{ //function
   setphoneNumber(e.target.value);
  };

const emailAddress =(e)=>{ //function
   setemailAddress(e.target.value);
  };

const Birthday =(e)=>{ //function
   setdateofBirth(e.target.value);
  };

const JChange =(e)=>{ //function
   setSelectJSkill(e.target.value);
  };

const EChange =(e)=>{ //function
   setSelectESkill(e.target.value);
  };

const resetClick =()=>{
	setName("");
	setphoneNumber("");
	setemailAddress("");
	setdateofBirth("");
	setSelectJSkill("");
	setSelectESkill("");

}

const sendClick=()=>{
  localStorage.setItem("NAME", name);
  localStorage.setItem("PHONENUMBER", phone);
  localStorage.setItem("EMAILADDRESS", email);
  localStorage.setItem("DATEOFBIRTH", DOB);  // (Data name(keyname) , Data) save data in local storage
}

return(
      <>
         <h1 className="mt-3" align="center">Register Form</h1>
         <br></br>

         <CRow>
            <CCol lg="6">  
               <CRow>     
                  <CCol lg="1"></CCol>
                  <CCol lg="3"><CLabel className="mt-2">Name</CLabel></CCol>
                  <CCol lg="7"><CInput type="text" value={name}//variable name
                  onChange={nameChange} // function name
                  /></CCol>
                  <CCol lg="1"></CCol>
               </CRow>

               <br></br>
               <CRow>     
                  <CCol lg="1"></CCol>
                  <CCol lg="3"><CLabel className="mt-2">Phone Number</CLabel></CCol>
                  <CCol lg="7"><CInput type="text" value={phone}
                  onChange={phoneNumber}
                  /></CCol>
                  <CCol lg="1"></CCol>
               </CRow>
            
               <br></br>
               <CRow>     
                  <CCol lg="1"></CCol>
                  <CCol lg="3"><CLabel className="mt-2">Japanese Skill</CLabel></CCol>
                  <CCol lg="7">  
                        <CSelect value={jSkill}
                        onChange={JChange}>
                              <option value="">-- Select --</option>
                           {
                              japanSkill.map((data,index)=>{
                                 return(
                                    <option key={data.id}
                                       value={data.level}
                                    >{data.level}</option>
                                 )
                              })
                           }
                        </CSelect>
                  </CCol>
                  <CCol lg="1"></CCol>
               </CRow>
            </CCol>

            <CCol lg="6">

               <br></br>     
               <CRow>     
                  <CCol lg="1"></CCol>
                  <CCol lg="3"><CLabel className="mt-2">Email</CLabel></CCol>
                  <CCol lg="7"><CInput type="email" value={email}
                  onChange={emailAddress}
                  /></CCol>
                  <CCol lg="1"></CCol>
               </CRow>
            
               <br></br>
               <CRow>     
                  <CCol lg="1"></CCol>
                  <CCol lg="3"><CLabel className="mt-2">Birthday</CLabel></CCol>
                  <CCol lg="7"><CInput type="Date" value={DOB}
                  onChange={Birthday}
                  /></CCol>
                  <CCol lg="1"></CCol>
               </CRow>

               <br></br>
               <CRow>     
                  <CCol lg="1"></CCol>
                  <CCol lg="3"><CLabel className="mt-2">English Skill</CLabel></CCol>
                  <CCol lg="7"> 
                     <CSelect value={eSkill}
                     onChange={EChange}>
                           <option value="">-- Select --</option>
                        {
                           englishSkill.map((data,index)=>{
                              return(
                                 <option key={data.id}
                                    value={data.level}
                                 >{data.level}</option>
                              )
                           })
                        }
                     </CSelect>
                  </CCol>
                  <CCol lg="1"></CCol>
               </CRow>

            </CCol>
            
         </CRow>
         
         <br></br>
         <center>
            <CButton className = "mt-4 btn btn-outline-success"
		        onClick={sendClick}
		        >Send</CButton>&emsp;
            <CButton className = "mt-4 btn btn-outline-danger"
		        onClick={resetClick}
		        >Reset</CButton>
         </center>
      </>
    )
}

export default NewMenu;