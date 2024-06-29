import React, { useState } from "react"; //import
import HomePrime from "./homePrime";

const Home=()=>{ // functional component

    const[username,setUsername]=useState(""); // variable by using useState
    const[phone,setPhone]=useState(""); // variable by using useState


    const saveClick =()=>{ // funtion
        alert("save clicked");
    }

    const usernameChange = (e)=>{
        setUsername(e.target.value);
    }

    const phoneChange =(e)=>{ // funtion //For onChange, must use e
        setPhone(e.target.value);
    }

    return( //return
        <>
            <h1>This is Home</h1>
            <HomePrime 
            name={username}
            usernameChange={usernameChange} 
            age="16"
            saveClick={saveClick}
            phone={phone}
            phoneChange={phoneChange}
            />
        </>
       
    )
}

export default Home;