import { useState } from 'react'
import styles from "../Signin/Signin.module.css"
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
 
function Signin() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();

    const login = () => {
        if (username === "Admin" && password === "123456") { 
          navigate("/Home")
        }
        else if(username == '' && password == ''){
          alert("Please fill in all fields")
        }
        else {
          navigate("/Error")
        }
    }

    return (
        <div className={styles.header}>
            <div className={styles.img}></div>
            <div className={styles.container}>
               <h3 >Signin</h3>
                <input onChange={(e)=>setusername(e.target.value)} type='text' placeholder='Username' />

                <input  onChange={(e)=>setpassword(e.target.value)} type='password' placeholder='Password' />
                <button className={styles.bttn} onClick={login} type='submit'>Submit</button>
  
            <div className={styles.icons}>
           <a href='https://myaccount.google.com/'target='_blank'><FaGoogle className={styles.icon}/></a>
           <a href='https://www.facebook.com/login.php/'target='_blank'> <FaFacebook className={styles.icon}/></a>
            </div>
            
           </div>
           
        </div>
    )
}

export default Signin;
