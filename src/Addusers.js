import React, {useState} from 'react';
import './Addusers.css';

function AddUsers() {
   const [enteredName,setEnteredName ] =   useState("");
   const [enteredMobile,setEnteredMobile] =  useState("");
   const [enteredEmail,setEnteredEmail] =  useState("");
   const [enteredMale,setEnteredMale] = useState("");
   const [enteredFemale,setEnteredFemale] = useState("");
   const [enteredAddress,setEnteredAddress] = useState("");

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const mobileChangeHandler = (event) => {
        setEnteredMobile(event.target.value); 
        
    }
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }
    const maleChangeHandler = (event) => {
        setEnteredMale(event.targent.value);
    }
    const femaleChangeHandler = (event) => {
        setEnteredFemale(event.targent.value);
    }
    const addressChangeHandler = (event) => {
        setEnteredAddress(event.targent.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const userData = {
            name:enteredName,
            mobile:enteredMobile,
            email:enteredEmail,
            male:enteredMale,
            female:enteredFemale,
            address:enteredAddress,
        }
        setEnteredName('')
        setEnteredMobile('')
        setEnteredEmail('')
        setEnteredMale('')
        setEnteredFemale('')
        setEnteredAddress('')
        console.log(userData)
    }
    return (
        <div>

<form className="rrr" onSubmit={submitHandler}>
                <label>Name</label>
                <input type="text" onChange={nameChangeHandler} value={enteredName} /><br/><br/>
                <label>Mobile</label>
                <input type="text" onChange={mobileChangeHandler} value={enteredMobile} /><br/><br/>
                <label>Email</label>
                <input type="text" onChange={emailChangeHandler} value={enteredEmail} /> <br/><br/>
                <label className="jjj">Gender</label><br></br>
                <input type="radio" onChange={maleChangeHandler} value={enteredMale} />
                <label className="jjj">Male</label> <br/><br/>
                <input type="radio" onChange={femaleChangeHandler} value={enteredFemale} />
                <label className="jjj">Female</label> <br/><br/>
                <lable>Address</lable>
                <input type="text" onChange={addressChangeHandler} value={enteredAddress} /><br></br>
                <button>*</button> <lable>checkbox</lable><br></br>
                <button>Submit</button>
                </form>



          
        </div>
    )
}

export default AddUsers;
