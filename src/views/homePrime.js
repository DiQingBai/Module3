import { CInput } from "@coreui/react";
import React from "react";


const HomePrime=(props)=>{

let {name,age,saveClick,phoneChange, phone, usernameChange} = props; //destructuring

    return(
        <>
        <h1>This is Home Prime</h1>

        <CInput type="text" placeholder="please fill username"
            onChange={usernameChange} value={name} // how to use onChange
        />
        <p>Welcome {name} </p>

        <p>Age is {age}</p>
        <button className="btn btn-success"
        onClick={saveClick}
        >Save</button>

        <CInput type="text" placeholder="please fill phone"
            onChange={phoneChange} value={phone} // how to use onChange
        />
        <p>Phone is {phone}</p>

       </>
    )
}

export default HomePrime;